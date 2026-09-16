import { useEffect, useRef, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Form from "../Form/Form";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import VideoModal from "../VideoModal/VideoModal";

const inquiriesFormRestUrl = "https://veresk.com.au/wp-json/wp/v2/gblocks-forms/47191";
const generateBlocksFormScriptUrl = "https://veresk.com.au/wp-content/plugins/generateblocks-pro/dist/form.js?ver=2.7.1";
const generateBlocksFormEndpoint = "https://veresk.com.au/wp-json/generateblocks-pro/v1/forms/submit";
const generateBlocksSecurityEndpoint = "https://veresk.com.au/wp-json/generateblocks-pro/v1/forms/security";


const Contact1 = ({ variant = "default" }) => {

    const formMountRef = useRef(null);

    useEffect(() => {
        loadBackgroudImages();
      }, []);

      const [iframeSrc, setIframeSrc] = useState('about:blank');
	  const [toggle, setToggle] = useState(false);
	
	  const handelClick = () => {
		setIframeSrc("https://www.youtube.com/embed/rRid6GCJtgc");
		setToggle(!toggle);
	  };
      const handelClose = () => {
		setIframeSrc('about:blank');
		setToggle(!toggle);
	  };

      useEffect(() => {
        if (variant !== "home-inquiries") {
            return undefined;
        }

        const mount = formMountRef.current;
        if (!mount) {
            return undefined;
        }

        let source;
        let form;
        let submitButton;
        let originalButtonText;
        let fullWidthField;
        let fallbackForm = false;
        let active = true;

        const loadGenerateBlocksFormScript = () => {
            const existingScript = document.querySelector('script[src*="/generateblocks-pro/dist/form.js"]');

            if (existingScript) {
                return Promise.resolve();
            }

            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = generateBlocksFormScriptUrl;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        const mountForm = (formElement, sourceElement = null) => {
            if (!active || !formElement) {
                return false;
            }

            source = sourceElement;
            form = formElement;
            submitButton = form.querySelector('button[type="submit"]');
            originalButtonText = submitButton?.textContent;
            fullWidthField = Array.from(form.querySelectorAll(".gb-form-field"))
                .find((field) => field.querySelector("textarea"));

            form.classList.add("veresk-inquiries-form");
            fullWidthField?.classList.add("veresk-form-field--full");

            if (submitButton) {
                submitButton.textContent = "Send Enquiry";
            }

            mount.appendChild(form);

            return true;
        };

        const mountInquiriesForm = () => {
            if (form && mount.contains(form)) {
                return true;
            }

            source = document.getElementById("veresk-inquiries-form-source");
            const inquiriesForm = source?.querySelector("form.gb-form");

            if (!source || !inquiriesForm) {
                return false;
            }

            return mountForm(inquiriesForm, source);
        };

        const loadInquiriesFormFallback = async () => {
            try {
                const response = await fetch(inquiriesFormRestUrl, {
                    headers: { Accept: "application/json" },
                });

                if (!response.ok) {
                    return;
                }

                const reusableForm = await response.json();

                if (!active || form || !reusableForm?.content?.rendered) {
                    return;
                }

                const formDocument = new DOMParser().parseFromString(
                    reusableForm.content.rendered,
                    "text/html",
                );
                const inquiriesForm = formDocument.querySelector("form.gb-form");

                if (!inquiriesForm) {
                    return;
                }

                const isLocalPreview = ["localhost", "127.0.0.1"].includes(window.location.hostname);
                const formApiOrigin = isLocalPreview ? window.location.origin : "https://veresk.com.au";

                inquiriesForm.dataset.gbErrorMessage = "Something went wrong. Please try again.";
                inquiriesForm.dataset.gbFormEndpoint = isLocalPreview
                    ? `${formApiOrigin}/wp-json/generateblocks-pro/v1/forms/submit`
                    : generateBlocksFormEndpoint;
                inquiriesForm.dataset.gbFormId = String(reusableForm.id);
                inquiriesForm.dataset.gbInstance = "1";
                inquiriesForm.dataset.gbPostId = "486";
                inquiriesForm.dataset.gbSecurityEndpoint = isLocalPreview
                    ? `${formApiOrigin}/wp-json/generateblocks-pro/v1/forms/security`
                    : generateBlocksSecurityEndpoint;
                inquiriesForm.dataset.gbSuccessMessage = "Thanks for your message. We will get back to you soon.";
                inquiriesForm.method = "post";
                inquiriesForm.noValidate = true;

                const message = document.createElement("div");
                message.className = "gb-form-message";
                message.setAttribute("role", "status");
                message.setAttribute("aria-live", "polite");
                message.setAttribute("aria-atomic", "true");
                message.hidden = true;
                inquiriesForm.appendChild(message);

                fallbackForm = true;

                if (mountForm(inquiriesForm)) {
                    observer.disconnect();
                    await loadGenerateBlocksFormScript();
                }
            } catch {
                // WordPress remains the primary render path; leave the mount untouched if unavailable.
            }
        };

        const observer = new MutationObserver(() => {
            if (mountInquiriesForm()) {
                observer.disconnect();
            }
        });

        if (!mountInquiriesForm()) {
            observer.observe(document.body, { childList: true, subtree: true });
            loadInquiriesFormFallback();
        }

        return () => {
            active = false;
            observer.disconnect();

            if (submitButton && originalButtonText) {
                submitButton.textContent = originalButtonText;
            }

            form?.classList.remove("veresk-inquiries-form");
            fullWidthField?.classList.remove("veresk-form-field--full");

            if (source?.isConnected && form && !fallbackForm) {
                source.appendChild(form);
            } else {
                form?.remove();
            }
        };
      }, [variant]);

    if (variant === "home-inquiries") {
        return (
            <section className="contact-area veresk-contact-area">
                <div className="container">
                    <div className="veresk-contact-content">
                        <div className="section-title text-left">
                            <SectionTitle
                                SubTitle="CONTACT US"
                                Title="Let’s Discuss Your Project"
                            ></SectionTitle>
                            <p className="veresk-contact-intro">
                                Tell us about your project, engineering requirements or service needs. Our team will get back to you to discuss the next steps.
                            </p>
                        </div>
                        <div className="veresk-inquiries-form-mount" ref={formMountRef}></div>
                    </div>
                </div>
                <div className="contact-box veresk-contact-cta">
                    <div className="contact-video-icon">
                        <span className="video-vemo-icon venobox vbox-item">LET&apos;S TALK</span>
                    </div>
                </div>
            </section>
        );
    }
      
    return (
        <div className="contact-area" data-background="/assets/images/contact-bg2.png">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-7">
                            <div className="section-title text-left">
                            <SectionTitle
                                    SubTitle="CONTACT US"
                                    Title="Make an Online Appoinemnt Booking<br> For Business Planing."
                            ></SectionTitle>
                            </div>
                            <Form></Form>
                        </div>
                        <div className="col-lg-6 col-md-5">
                            <div className="contact-box">
                                <div className="contact-video-icon">	
                                    <span onClick={handelClick} className="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true">Play</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <VideoModal
                    isTrue={toggle}
                    iframeSrc={iframeSrc}
                    handelClose={handelClose}        
                ></VideoModal>
            </div>

    );
};

export default Contact1;
