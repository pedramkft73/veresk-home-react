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

$veresk_seo_title = 'Veresk Engineers | Engineering, HVAC Services & Digital Tools';
$veresk_seo_description = 'Veresk Engineers provides engineering design, HVAC and building-services support, commissioning, maintenance and digital engineering tools for projects in Sydney.';
$veresk_canonical = get_permalink( get_queried_object_id() );
$veresk_hero_image = $veresk_build_url . 'assets/images/veresk-harbour-bridge.jpg';

/* Rank Math owns metadata when active; these filters make the homepage intent explicit. */
if ( defined( 'RANK_MATH_VERSION' ) ) {
	add_filter( 'rank_math/frontend/title', static fn() => $veresk_seo_title, 99 );
	add_filter( 'rank_math/frontend/description', static fn() => $veresk_seo_description, 99 );
	add_filter( 'rank_math/frontend/canonical', static fn() => $veresk_canonical, 99 );
	add_filter(
		'rank_math/json_ld',
		static function ( $data ) {
			$knows_about = array(
				'Engineering design',
				'HVAC and mechanical building services',
				'Air conditioning installation and maintenance',
				'Commissioning and technical coordination',
				'Digital engineering tools',
				'AI-assisted engineering workflows',
			);

			$organization_found = false;
			foreach ( $data as &$entity ) {
				if ( ! is_array( $entity ) || empty( $entity['@type'] ) ) {
					continue;
				}
				$types = (array) $entity['@type'];
				if ( in_array( 'Organization', $types, true ) ) {
					$organization_found = true;
					$entity['knowsAbout'] = $knows_about;
					$entity['areaServed'] = array(
						'@type' => 'AdministrativeArea',
						'name'  => 'Sydney, New South Wales, Australia',
					);
					$entity['email'] = $entity['email'] ?? 'info@veresk.com.au';
					$entity['telephone'] = $entity['telephone'] ?? '+61 400 5000 33';
					break;
				}
			}
			unset( $entity );

			if ( ! $organization_found ) {
				$data['VereskOrganization'] = array(
					'@type'      => 'Organization',
					'@id'        => home_url( '/#organization' ),
					'name'       => 'Veresk Engineers',
					'url'        => home_url( '/' ),
					'email'      => 'info@veresk.com.au',
					'telephone'  => '+61 400 5000 33',
					'address'    => array(
						'@type'           => 'PostalAddress',
						'addressLocality' => 'Castle Hill',
						'addressRegion'   => 'NSW',
						'postalCode'      => '2154',
						'addressCountry'  => 'AU',
					),
					'areaServed' => array(
						'@type' => 'AdministrativeArea',
						'name'  => 'Sydney, New South Wales, Australia',
					),
					'knowsAbout' => $knows_about,
				);
			}
			return $data;
		},
		99,
		1
	);
} else {
	add_filter( 'pre_get_document_title', static fn() => $veresk_seo_title, 99 );
	add_action(
		'wp_head',
		static function () use ( $veresk_seo_description, $veresk_canonical, $veresk_hero_image ) {
			echo '<meta name="description" content="' . esc_attr( $veresk_seo_description ) . '">' . "\n";
			echo '<link rel="canonical" href="' . esc_url( $veresk_canonical ) . '">' . "\n";
			echo '<meta property="og:type" content="website">' . "\n";
			echo '<meta property="og:title" content="Veresk Engineers | Engineering, HVAC Services &amp; Digital Tools">' . "\n";
			echo '<meta property="og:description" content="' . esc_attr( $veresk_seo_description ) . '">' . "\n";
			echo '<meta property="og:url" content="' . esc_url( $veresk_canonical ) . '">' . "\n";
			echo '<meta property="og:image" content="' . esc_url( $veresk_hero_image ) . '">' . "\n";
			echo '<meta name="twitter:card" content="summary_large_image">' . "\n";
			$schema = array(
				'@context' => 'https://schema.org',
				'@type' => 'Organization',
				'@id' => home_url( '/#organization' ),
				'name' => 'Veresk Engineers',
				'url' => home_url( '/' ),
				'email' => 'info@veresk.com.au',
				'telephone' => '+61 400 5000 33',
				'address' => array(
					'@type' => 'PostalAddress',
					'addressLocality' => 'Castle Hill',
					'addressRegion' => 'NSW',
					'postalCode' => '2154',
					'addressCountry' => 'AU',
				),
				'areaServed' => 'Sydney, New South Wales, Australia',
				'knowsAbout' => array( 'Engineering design', 'HVAC and mechanical building services', 'Commissioning', 'Digital engineering tools', 'AI-assisted engineering workflows' ),
			);
			echo '<script type="application/ld+json">' . wp_json_encode( $schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE ) . '</script>' . "\n";
		},
		2
	);
}

/* Preload only the likely LCP background; other imagery remains lazy-loaded. */
add_action(
	'wp_head',
	static function () use ( $veresk_build_path, $veresk_build_url ) {
		$hero_rel = 'assets/images/veresk-harbour-bridge.jpg';
		if ( file_exists( $veresk_build_path . $hero_rel ) ) {
			echo '<link rel="preload" as="image" href="' . esc_url( $veresk_build_url . $hero_rel ) . '" fetchpriority="high">' . "\n";
		}
	},
	1
);

if ( is_page_template( 'page-templates/template-veresk-react-home.php' ) && file_exists( $veresk_manifest ) ) {
	$veresk_manifest_data = json_decode( (string) file_get_contents( $veresk_manifest ), true );
	if ( is_array( $veresk_manifest_data ) && isset( $veresk_manifest_data['index.html'] ) ) {
		$veresk_entry = $veresk_manifest_data['index.html'];
		$veresk_scoped_css_file = 'assets/veresk-react-home.css';
		$veresk_css_files = file_exists( $veresk_build_path . $veresk_scoped_css_file ) ? array( $veresk_scoped_css_file ) : array();
		foreach ( $veresk_css_files as $veresk_css_index => $veresk_css_file ) {
			$veresk_css_path = $veresk_build_path . $veresk_css_file;
			$veresk_css_ver = file_exists( $veresk_css_path ) ? (string) filemtime( $veresk_css_path ) : null;
			$veresk_style_handle = 'veresk-react-home-' . $veresk_css_index;
			wp_enqueue_style( $veresk_style_handle, $veresk_build_url . $veresk_css_file, array(), $veresk_css_ver );
		}
		if ( $veresk_style_handle ) {
			wp_add_inline_style(
				$veresk_style_handle,
				'#primary.site-main:has(> #veresk-react-home){box-sizing:border-box;width:100%;min-width:0;max-width:100%}#veresk-react-home{box-sizing:border-box;display:block;width:100%;min-width:0;max-width:100%;margin:0;padding:0;overflow-x:clip}#veresk-react-home #root,#veresk-react-home .home-page,#veresk-react-home .project_list,#veresk-react-home .slick-slider,#veresk-react-home .slick-list{box-sizing:border-box;min-width:0;max-width:100%}.veresk-server-fallback{max-width:1200px;margin:0 auto;padding:48px 24px;color:#17333a}.veresk-server-fallback section{margin:0 0 42px}.veresk-server-fallback ul{padding-left:1.25rem}.veresk-server-fallback a{color:#0e6f73}'
			);
		}
		if ( $veresk_style_handle && isset( $veresk_entry['file'] ) ) {
			$veresk_script_path = $veresk_build_path . $veresk_entry['file'];
			$veresk_script_ver = file_exists( $veresk_script_path ) ? (string) filemtime( $veresk_script_path ) : null;
			wp_enqueue_script( 'veresk-react-home', $veresk_build_url . $veresk_entry['file'], array(), $veresk_script_ver, true );
			add_filter(
				'script_loader_tag',
				static function ( $tag, $handle, $src ) {
					if ( 'veresk-react-home' !== $handle ) return $tag;
					return sprintf( '<script type="module" src="%s"></script>' . "\n", esc_url( $src ) );
				},
				10,
				3
			);
		}
	}
}

/* Reuse the live GenerateBlocks Pro Inquiries form server-side. */
$veresk_inquiries_form_markup = '';
$veresk_inquiries_form = null;
$veresk_form_posts = get_posts(
	array(
		'post_type' => 'gblocks_form',
		'post_status' => 'publish',
		'posts_per_page' => -1,
		'orderby' => 'modified',
		'order' => 'DESC',
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
	$veresk_context_id = $veresk_contact_page instanceof WP_Post ? $veresk_contact_page->ID : get_queried_object_id();
	$veresk_form_runtime_attributes = array(
		'data-gb-error-message' => 'Something went wrong. Please try again.',
		'data-gb-form-endpoint' => rest_url( 'generateblocks-pro/v1/forms/submit' ),
		'data-gb-form-id' => (string) $veresk_inquiries_form->ID,
		'data-gb-instance' => '1',
		'data-gb-post-id' => (string) $veresk_context_id,
		'data-gb-security-endpoint' => rest_url( 'generateblocks-pro/v1/forms/security' ),
		'data-gb-success-message' => 'Thanks for your message. We will get back to you soon.',
	);
	if ( class_exists( 'DOMDocument' ) ) {
		$veresk_previous_libxml_state = libxml_use_internal_errors( true );
		$veresk_form_dom = new DOMDocument( '1.0', 'UTF-8' );
		$veresk_form_dom->loadHTML( '<!DOCTYPE html><html><body>' . $veresk_form_content . '</body></html>', LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD );
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
	if ( ! $veresk_inquiries_form_markup && preg_match( '#<form\b[^>]*class=(["\'])[^"\']*\bgb-form\b[^"\']*\1[^>]*>.*?</form>#is', $veresk_form_content, $veresk_form_matches ) ) {
		$veresk_runtime_attribute_html = '';
		foreach ( $veresk_form_runtime_attributes as $veresk_attribute_name => $veresk_attribute_value ) {
			$veresk_runtime_attribute_html .= sprintf( ' %s="%s"', esc_attr( $veresk_attribute_name ), esc_attr( $veresk_attribute_value ) );
		}
		$veresk_inquiries_form_markup = preg_replace( '/<form\b/i', '<form method="post" novalidate="novalidate"' . $veresk_runtime_attribute_html, $veresk_form_matches[0], 1 );
	}
}
if ( $veresk_inquiries_form_markup ) {
	wp_enqueue_style( 'generateblocks-form' );
	wp_enqueue_script( 'generateblocks-form' );
}

$veresk_latest_posts = get_posts( array( 'post_type' => 'post', 'post_status' => 'publish', 'posts_per_page' => 3, 'ignore_sticky_posts' => true ) );

get_header();
?>
<main id="primary" class="site-main">
	<div id="veresk-react-home">
		<div id="root">
			<div class="veresk-server-fallback">
				<section aria-labelledby="veresk-fallback-title">
					<p>ENGINEERING • DIGITAL TOOLS • TECHNICAL SOLUTIONS</p>
					<h1 id="veresk-fallback-title">Engineering Smarter Solutions</h1>
					<p>Practical engineering, digital tools and technical solutions designed to solve real-world challenges.</p>
					<p><a href="<?php echo esc_url( home_url( '/services/' ) ); ?>">Explore Our Services</a> · <a href="<?php echo esc_url( home_url( '/online-tools/' ) ); ?>">Explore Engineering Tools</a></p>
				</section>
				<section><h2>Engineering Capabilities</h2><p>Engineering calculations, system design, equipment selection, technical review, digital workflows, project coordination and commissioning support across the project lifecycle.</p></section>
				<section><h2>AI-Powered Engineering Tools</h2><p>Veresk develops practical engineering tools powered by AI to simplify calculations, improve workflows and support faster technical decisions.</p><p><a href="<?php echo esc_url( home_url( '/online-tools/' ) ); ?>">View engineering tools</a></p></section>
				<section><h2>Engineering Guidance</h2><h3>What engineering services does Veresk provide?</h3><p>Veresk supports engineering design, calculations, technical coordination, digital engineering workflows and practical project delivery.</p><h3>How do digital tools and AI fit into the engineering process?</h3><p>Digital and AI-assisted tools help streamline calculations, improve workflows and support faster, more consistent technical decisions.</p></section>
				<?php if ( $veresk_latest_posts ) : ?>
				<section><h2>Engineering Insights &amp; Updates</h2><ul>
					<?php foreach ( $veresk_latest_posts as $veresk_post ) : ?>
					<li><a href="<?php echo esc_url( get_permalink( $veresk_post ) ); ?>"><?php echo esc_html( get_the_title( $veresk_post ) ); ?></a></li>
					<?php endforeach; ?>
				</ul><p><a href="<?php echo esc_url( home_url( '/blog/' ) ); ?>">View all posts</a></p></section>
				<?php endif; ?>
				<section><h2>Contact Veresk Engineers</h2><p>Tell us about your project, engineering requirements or service needs. Our team will get back to you to discuss the next steps.</p><p><a href="<?php echo esc_url( home_url( '/contact/' ) ); ?>">Contact us</a></p></section>
			</div>
		</div>
		<?php if ( $veresk_inquiries_form_markup ) : ?>
			<div id="veresk-inquiries-form-source" hidden aria-hidden="true"><?php echo $veresk_inquiries_form_markup; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?></div>
		<?php endif; ?>
	</div>
</main>
<?php get_footer(); ?>
