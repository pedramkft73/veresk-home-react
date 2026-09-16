<?php
/**
 * Template Name: Veresk React Homepage
 * Template Post Type: page
 *
 * GeneratePress child-theme template for the content-only React homepage.
 */

defined( 'ABSPATH' ) || exit;

$veresk_build_path = trailingslashit( get_stylesheet_directory() ) . 'veresk-home/';
$veresk_build_url  = trailingslashit( get_stylesheet_directory_uri() ) . 'veresk-home/';
$veresk_manifest   = $veresk_build_path . '.vite/manifest.json';
$veresk_entry      = null;
$veresk_style_handle = null;

if ( is_page_template( 'page-templates/template-veresk-react-home.php' ) && file_exists( $veresk_manifest ) ) {
	$veresk_manifest_data = json_decode( (string) file_get_contents( $veresk_manifest ), true );

	if ( is_array( $veresk_manifest_data ) && isset( $veresk_manifest_data['index.html'] ) ) {
		$veresk_entry = $veresk_manifest_data['index.html'];
		$veresk_scoped_css_file = 'assets/veresk-react-home.css';
		$veresk_css_files = file_exists( $veresk_build_path . $veresk_scoped_css_file )
			? array( $veresk_scoped_css_file )
			: array();

		foreach ( $veresk_css_files as $veresk_css_index => $veresk_css_file ) {
			$veresk_css_path = $veresk_build_path . $veresk_css_file;
			$veresk_css_ver  = file_exists( $veresk_css_path ) ? (string) filemtime( $veresk_css_path ) : null;
			$veresk_style_handle = 'veresk-react-home-' . $veresk_css_index;

			wp_enqueue_style(
				$veresk_style_handle,
				$veresk_build_url . $veresk_css_file,
				array(),
				$veresk_css_ver
			);
		}

		if ( $veresk_style_handle ) {
			wp_add_inline_style(
				$veresk_style_handle,
				'#primary.site-main:has(> #veresk-react-home){box-sizing:border-box;width:100%;min-width:0;max-width:100%}#veresk-react-home{box-sizing:border-box;display:block;width:100%;min-width:0;max-width:100%;margin:0;padding:0;overflow-x:clip}#veresk-react-home #root,#veresk-react-home .home-page,#veresk-react-home .project_list,#veresk-react-home .slick-slider,#veresk-react-home .slick-list{box-sizing:border-box;min-width:0;max-width:100%}'
			);
		}

		if ( $veresk_style_handle && isset( $veresk_entry['file'] ) ) {
			$veresk_script_path = $veresk_build_path . $veresk_entry['file'];
			$veresk_script_ver  = file_exists( $veresk_script_path ) ? (string) filemtime( $veresk_script_path ) : null;

			wp_enqueue_script(
				'veresk-react-home',
				$veresk_build_url . $veresk_entry['file'],
				array(),
				$veresk_script_ver,
				true
			);

			add_filter(
				'script_loader_tag',
				static function ( $tag, $handle, $src ) {
					if ( 'veresk-react-home' !== $handle ) {
						return $tag;
					}

					return sprintf(
						'<script type="module" src="%s"></script>' . "\n",
						esc_url( $src )
					);
				},
				10,
				3
			);
		}
	}
}

$veresk_inquiries_form_markup = '';
$veresk_inquiries_form        = null;
$veresk_form_posts            = get_posts(
	array(
		'post_type'      => 'gblocks_form',
		'post_status'    => 'publish',
		'posts_per_page' => -1,
		'orderby'        => 'modified',
		'order'          => 'DESC',
	)
);

foreach ( $veresk_form_posts as $veresk_form_post ) {
	$veresk_form_name = sanitize_title( wp_strip_all_tags( $veresk_form_post->post_title ) );

	if ( in_array( $veresk_form_name, array( 'inquiries', 'inqueries' ), true ) ) {
		$veresk_inquiries_form = $veresk_form_post;
		break;
	}
}

if ( $veresk_inquiries_form instanceof WP_Post ) {
	$veresk_form_content = do_blocks( $veresk_inquiries_form->post_content );
	$veresk_contact_page = get_page_by_path( 'contact', OBJECT, 'page' );
	$veresk_context_id   = $veresk_contact_page instanceof WP_Post
		? $veresk_contact_page->ID
		: get_queried_object_id();

	$veresk_form_runtime_attributes = array(
		'data-gb-error-message'     => 'Something went wrong. Please try again.',
		'data-gb-form-endpoint'     => rest_url( 'generateblocks-pro/v1/forms/submit' ),
		'data-gb-form-id'           => (string) $veresk_inquiries_form->ID,
		'data-gb-instance'          => '1',
		'data-gb-post-id'           => (string) $veresk_context_id,
		'data-gb-security-endpoint' => rest_url( 'generateblocks-pro/v1/forms/security' ),
		'data-gb-success-message'   => 'Thanks for your message. We will get back to you soon.',
	);

	if ( class_exists( 'DOMDocument' ) ) {
		$veresk_previous_libxml_state = libxml_use_internal_errors( true );
		$veresk_form_dom              = new DOMDocument( '1.0', 'UTF-8' );
		$veresk_form_dom->loadHTML(
			'<!DOCTYPE html><html><body>' . $veresk_form_content . '</body></html>',
			LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD
		);

		foreach ( $veresk_form_dom->getElementsByTagName( 'form' ) as $veresk_form_element ) {
			$veresk_form_classes = ' ' . $veresk_form_element->getAttribute( 'class' ) . ' ';

			if ( false !== strpos( $veresk_form_classes, ' gb-form ' ) ) {
				foreach ( $veresk_form_runtime_attributes as $veresk_attribute_name => $veresk_attribute_value ) {
					$veresk_form_element->setAttribute( $veresk_attribute_name, $veresk_attribute_value );
				}

				$veresk_form_element->setAttribute( 'method', 'post' );
				$veresk_form_element->setAttribute( 'novalidate', 'novalidate' );
				$veresk_inquiries_form_markup = $veresk_form_dom->saveHTML( $veresk_form_element );
				break;
			}
		}

		libxml_clear_errors();
		libxml_use_internal_errors( $veresk_previous_libxml_state );
	}

	if (
		! $veresk_inquiries_form_markup
		&& preg_match(
			'#<form\b[^>]*class=(["\'])[^"\']*\bgb-form\b[^"\']*\1[^>]*>.*?</form>#is',
			$veresk_form_content,
			$veresk_form_matches
		)
	) {
		$veresk_runtime_attribute_html = '';

		foreach ( $veresk_form_runtime_attributes as $veresk_attribute_name => $veresk_attribute_value ) {
			$veresk_runtime_attribute_html .= sprintf(
				' %s="%s"',
				esc_attr( $veresk_attribute_name ),
				esc_attr( $veresk_attribute_value )
			);
		}

		$veresk_inquiries_form_markup = preg_replace(
			'/<form\b/i',
			'<form method="post" novalidate="novalidate"' . $veresk_runtime_attribute_html,
			$veresk_form_matches[0],
			1
		);
	}
}

if ( $veresk_inquiries_form_markup ) {
	wp_enqueue_style( 'generateblocks-form' );
	wp_enqueue_script( 'generateblocks-form' );
}

get_header();
?>

<main id="primary" class="site-main">
	<div id="veresk-react-home">
		<div id="root"></div>
		<?php if ( $veresk_inquiries_form_markup ) : ?>
			<div id="veresk-inquiries-form-source" hidden aria-hidden="true">
				<?php echo $veresk_inquiries_form_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Trusted server-rendered WordPress block markup. ?>
			</div>
		<?php endif; ?>
		<noscript><?php esc_html_e( 'JavaScript is required to view this page.', 'veresk' ); ?></noscript>
	</div>
</main>

<?php
get_footer();
