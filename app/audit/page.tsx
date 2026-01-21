import type { Metadata } from "next"
import Script from "next/script"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Local Visibility Audit | PureRank Strategies",
  description:
    "Get a comprehensive snapshot of your Google & Maps presence with clear next steps to get found first in Southern Utah.",
  alternates: {
    canonical: "https://purerankstrategies.com/audit",
  },
}

export default function AuditPage() {
  return (
    <main className="py-20 bg-gradient-to-br from-gray-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Hero */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Local Visibility Audit</h1>
            <p className="text-lg text-gray-600">
              Get a comprehensive snapshot of how you show up today—and exactly what to improve next to get found first.
            </p>
          </div>

          {/* Form */}
          <div className="mb-12">
            <style
              dangerouslySetInnerHTML={{
                __html: `@import url(https://fonts.bunny.net/css?family=league-spartan:400,700|IBM+Plex+Sans:400);`,
              }}
            />
            <style
              dangerouslySetInnerHTML={{
                __html: `
#_form_5_{font-size:14px;line-height:1.6;font-family:arial, helvetica, sans-serif;margin:0}._form_hide{display:none;visibility:hidden}._form_show{display:block;visibility:visible}#_form_5_._form-top{top:0}#_form_5_._form-bottom{bottom:0}#_form_5_._form-left{left:0}#_form_5_._form-right{right:0}#_form_5_ input[type="text"],#_form_5_ input[type="tel"],#_form_5_ input[type="date"],#_form_5_ textarea{padding:12px;height:auto;border:#979797 1px solid;border-radius:8px;color:#000 !important;font-size:16px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;width:100%;max-width:500px}#_form_5_ textarea{resize:none}#_form_5_ ._submit{-webkit-appearance:none;cursor:pointer;font-family:arial, sans-serif;font-size:14px;text-align:center;background:#CB6CE6 !important;border:0 !important;-moz-border-radius:4px !important;-webkit-border-radius:4px !important;border-radius:4px !important;color:#000000 !important;padding:10px !important}#_form_5_ ._submit:disabled{cursor:not-allowed;opacity:0.4}#_form_5_ ._submit.processing{position:relative}#_form_5_ ._submit.processing::before{content:"";width:1em;height:1em;position:absolute;z-index:1;top:50%;left:50%;border:double 3px transparent;border-radius:50%;background-image:linear-gradient(#CB6CE6, #CB6CE6), conic-gradient(#CB6CE6, #000000);background-origin:border-box;background-clip:content-box, border-box;animation:1200ms ease 0s infinite normal none running _spin}#_form_5_ ._submit.processing::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0}@keyframes _spin{0%{transform:translate(-50%, -50%) rotate(90deg)}100%{transform:translate(-50%, -50%) rotate(450deg)}}#_form_5_ ._close-icon{cursor:pointer;background-image:url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");background-repeat:no-repeat;background-size:14.2px 14.2px;position:absolute;display:block;top:11px;right:9px;overflow:hidden;width:16.2px;height:16.2px}#_form_5_ ._close-icon:before{position:relative}#_form_5... <truncated>
`,
              }}
            />
            <form
              method="POST"
              action="https://purerank.activehosted.com/proc.php"
              id="_form_5_"
              className="_form _form_5 _inline-form _dark"
              noValidate
              data-styles-version="5"
            >
              <input type="hidden" name="u" value="5" />
              <input type="hidden" name="f" value="5" />
              <input type="hidden" name="s" />
              <input type="hidden" name="c" value="0" />
              <input type="hidden" name="m" value="0" />
              <input type="hidden" name="act" value="sub" />
              <input type="hidden" name="v" value="2" />
              <input type="hidden" name="or" value="789a6b43-1f1a-4677-a500-4d75111eb84c" />
              <div className="_form-content">
                <div className="_form_element _x06443865 _full_width">
                  <label htmlFor="fullname" className="_form-label">
                    Full Name
                  </label>
                  <div className="_field-wrapper">
                    <input type="text" id="fullname" name="fullname" placeholder="Type your name" />
                  </div>
                </div>
                <div className="_form_element _x97863241 _full_width">
                  <label htmlFor="email" className="_form-label">
                    Email<span className="field-required">*</span>
                  </label>
                  <div className="_field-wrapper">
                    <input type="text" id="email" name="email" placeholder="Type your email" required />
                  </div>
                </div>
                <div className="_form_element _x25726240 _full_width">
                  <label htmlFor="phone" className="_form-label">
                    Phone
                  </label>
                  <div className="_field-wrapper">
                    <input type="text" id="phone" name="phone" placeholder="Type your phone number" />
                  </div>
                </div>
                <div className="_form_element _x03187175 _full_width">
                  <label htmlFor="field[2]" className="_form-label">
                    Why You&apos;re Reaching Out
                  </label>
                  <div className="_field-wrapper">
                    <input type="text" id="field[2]" name="field[2]" placeholder="" />
                  </div>
                </div>
                <label htmlFor="sms_consent" className="sms_consent_checkbox">
                  <input type="checkbox" id="sms_consent" name="sms_consent" />
                  <div className="sms_consent_message">
                    By submitting this form and signing up for texts, you consent to receive marketing text messages (e.g. promos, cart reminders) from PureRank Strategies at the number provided. Consent is not a condition of purchase. Msg & data rates may apply. Msg frequency varies. Unsubscribe at any time by replying STOP.
                  </div>
                </label>
                <div className="_button-wrapper _full_width">
                  <button id="_form_5_submit" className="_submit" type="submit">
                    Submit
                  </button>
                </div>
                <div className="_clear-element"></div>
              </div>
              <div className="_form-thank-you" style={{ display: "none" }}></div>
              <div className="_form-branding">
                <div className="_marketing-by">Marketing by</div>
                <a href="https://www.activecampaign.com/?utm_medium=referral&utm_campaign=acforms" className="_logo">
                  <span className="form-sr-only">ActiveCampaign</span>
                </a>
              </div>
            </form>
            <Script id="active-campaign-form" strategy="lazyOnload">
              {`
window.cfields = {"2":"why_youre_reaching_out"};
window._show_thank_you = function(id, message, trackcmp_url, email) {
    var form = document.getElementById('_form_' + id + '_'), thank_you = form.querySelector('._form-thank-you');
    form.querySelector('._form-content').style.display = 'none';
    thank_you.innerHTML = message;
    thank_you.style.display = 'block';
    const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
    var visitorObject = window[vgoAlias];
    if (email && typeof visitorObject !== 'undefined') {
        visitorObject('setEmail', email);
        visitorObject('update');
    } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
        _load_script(trackcmp_url);
    }
    if (typeof window._form_callback !== 'undefined') window._form_callback(id);
    thank_you.setAttribute('tabindex', '-1');
    thank_you.focus();
};
window._show_unsubscribe = function(id, message, trackcmp_url, email) {
    var form = document.getElementById('_form_' + id + '_'), unsub = form.querySelector('._form-thank-you');
    var branding = form.querySelector('._form-branding');
    if (branding) {
        branding.style.display = 'none';
    }
    form.querySelector('._form-content').style.display = 'none';
    unsub.style.display = 'block';
    form.insertAdjacentHTML('afterend', message)
    const vgoAlias = typeof visitorGlobalObjectAlias === 'undefined' ? 'vgo' : visitorGlobalObjectAlias;
    var visitorObject = window[vgoAlias];
    if (email && typeof visitorObject !== 'undefined') {
        visitorObject('setEmail', email);
        visitorObject('update');
    } else if (typeof(trackcmp_url) != 'undefined' && trackcmp_url) {
        _load_script(trackcmp_url);
    }
    if (typeof window._form_callback !== 'undefined') window._form_callback(id);
};
window._show_error = function(id, message, html) {
    var form = document.getElementById('_form_' + id + '_'),
        err = document.createElement('div'),
        button = form.querySelector('button[type="submit"]'),
        old_error = form.querySelector('._form_error');
    if (old_error) old_error.parentNode.removeChild(old_error);
    err.innerHTML = message;
    err.className = '_error-inner _form_error _no_arrow';
    var wrapper = document.createElement('div');
    wrapper.className = '_form-inner _show_be_error';
    wrapper.appendChild(err);
    button.parentNode.insertBefore(wrapper, button);
    var submitButton = form.querySelector('[id^="_form"][id$="_submit"]');
    submitButton.disabled = false;
    submitButton.classList.remove('processing');
    if (html) {
        var div = document.createElement('div');
        div.className = '_error-html';
        div.innerHTML = html;
        err.appendChild(div);
    }
};
window._load_script = function(url, callback, isSubmit) {
    var head = document.querySelector('head'), script = document.createElement('script'), r = false;
    var submitButton = document.querySelector('#_form_5_submit');
    script.charset = 'utf-8';
    script.src = url;
    if (callback) {
        script.onload = script.onreadystatechange = function() {
            if (!r && (!this.readyState || this.readyState == 'complete')) {
                r = true;
                callback();
            }
        };
    }
    script.onerror = function() {
        if (isSubmit) {
            if (script.src.length > 10000) {
                _show_error("5", "Sorry, your submission failed. Please shorten your responses and try again.");
            } else {
                _show_error("5", "Sorry, your submission failed. Please try again.");
            }
            submitButton.disabled = false;
            submitButton.classList.remove('processing');
        }
    }
    head.appendChild(script);
};
(function() {
    if (window.location.search.search("excludeform") !== -1) return false;
    var form_to_submit = document.getElementById('_form_5_');
    var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;
    
    var remove_tooltips = function() {
        for (var i = 0; i < tooltips.length; i++) {
            tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
        }
        tooltips = [];
    };
    var remove_tooltip = function(elem) {
        for (var i = 0; i < tooltips.length; i++) {
            if (tooltips[i].elem === elem) {
                tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
                tooltips.splice(i, 1);
                return;
            }
        }
    };
    var create_tooltip = function(elem, text) {
        var tooltip = document.createElement('div'),
            arrow = document.createElement('div'),
            inner = document.createElement('div'), new_tooltip = {};
        tooltip.id = elem.id + '-error';
        tooltip.setAttribute('role', 'alert');
        if (elem.type != 'radio' && (elem.type != 'checkbox' || elem.name === 'sms_consent')) {
            tooltip.className = '_error';
            arrow.className = '_error-arrow';
            inner.className = '_error-inner';
            inner.innerHTML = text;
            tooltip.appendChild(arrow);
            tooltip.appendChild(inner);
            elem.parentNode.appendChild(tooltip);
        } else {
            tooltip.className = '_error-inner _no_arrow';
            tooltip.innerHTML = text;
            elem.parentNode.insertBefore(tooltip, elem);
            new_tooltip.no_arrow = true;
        }
        new_tooltip.tip = tooltip;
        new_tooltip.elem = elem;
        tooltips.push(new_tooltip);
        return new_tooltip;
    };
    var resize_tooltip = function(tooltip) {
        var rect = tooltip.elem.getBoundingClientRect();
        var doc = document.documentElement,
            scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0));
        if (scrollPosition < 40) {
            tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
        } else {
            tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
        }
    };
    var resize_tooltips = function() {
        for (var i = 0; i < tooltips.length; i++) {
            if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
        }
    };
    var validate_field = function(elem, remove) {
        var tooltip = null, value = elem.value, no_error = true;
        remove ? remove_tooltip(elem) : false;
        if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
        if (elem.getAttribute('required') !== null) {
            if (value === undefined || value === null || value === '') {
                elem.className = elem.className + ' _has_error';
                no_error = false;
                tooltip = create_tooltip(elem, "This field is required.");
            }
        }
        if (no_error && elem.name == 'email') {
            if (!value.match(/^[\\+_a-z0-9-'&=]+(\\.[\\+_a-z0-9-']+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,})$/i)) {
                elem.className = elem.className + ' _has_error';
                no_error = false;
                tooltip = create_tooltip(elem, "Enter a valid email address.");
            }
        }
        if (no_error && elem.name === 'sms_consent') {
            var phoneInput = document.getElementById('phone');
            var consentRequired = phoneInput.attributes.required || phoneInput.value.length > 0;
            var showError = (consentRequired || !!elem.attributes.required) && !elem.checked;
            if (showError) {
                elem.className = elem.className + ' _has_error';
                no_error = false;
                tooltip = create_tooltip(elem, "Please check this box to continue");
            } else {
                elem.className = elem.className.replace(/ ?_has_error ?/g, '');
            }
        }
        tooltip ? resize_tooltip(tooltip) : false;
        return no_error;
    };
    var needs_validate = function(el) {
        if (el.getAttribute('required') !== null) {
            return true;
        }
        if ((el.name === 'email' || el.id === 'phone' || el.id === 'sms_consent') && el.value !== "") {
            return true;
        }
        return false;
    };
    var validate_form = function(e) {
        var err = form_to_submit.querySelector('._form_error'), no_error = true;
        if (!submitted) {
            submitted = true;
            for (var i = 0, len = allInputs.length; i < len; i++) {
                var input = allInputs[i];
                if (needs_validate(input)) {
                    if (input.type == 'text' || input.type == 'number' || input.type == 'time' || input.type == 'tel') {
                        input.addEventListener('blur', function() {
                            this.value = this.value.trim();
                            validate_field(this, true);
                        });
                        input.addEventListener('input', function() {
                            validate_field(this, true);
                        });
                    } else if (input.type == 'radio' || input.type == 'checkbox') {
                        (function(el) {
                            var radios = form_to_submit.elements[el.name];
                            for (var i = 0; i < radios.length; i++) {
                                radios[i].addEventListener('change', function() {
                                    validate_field(el, true);
                                });
                            }
                        })(input);
                    }
                }
            }
        }
        remove_tooltips();
        for (var i = 0, len = allInputs.length; i < len; i++) {
            var elem = allInputs[i];
            if (needs_validate(elem)) {
                if (elem.tagName.toLowerCase() !== "select") {
                    elem.value = elem.value.trim();
                }
                validate_field(elem) ? true : no_error = false;
            }
        }
        if (!no_error && e) {
            e.preventDefault();
        }
        resize_tooltips();
        return no_error;
    };
    window.addEventListener('resize', resize_tooltips);
    window.addEventListener('scroll', resize_tooltips);

    var _form_serialize = function(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=0;i<form.elements.length;i++){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"tel":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"text":case"number":case"date":case"time":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=0;j<form.elements[i].options.length;j++){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};

    var form_submit = function(e) {
        e.preventDefault();
        if (validate_form()) {
            var submitButton = e.target.querySelector('#_form_5_submit');
            submitButton.disabled = true;
            submitButton.classList.add('processing');
            var serialized = _form_serialize(document.getElementById('_form_5_')).replace(/%0A/g, '\\\\n');
            var err = form_to_submit.querySelector('._form_error');
            err ? err.parentNode.removeChild(err) : false;
            _load_script('https://purerank.activehosted.com/proc.php?' + serialized + '&jsonp=true', null, true);
        }
        return false;
    };
    form_to_submit.addEventListener('submit', form_submit);
})();
              `}
            </Script>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-bold mb-2">Google & Maps Visibility Snapshot</h3>
                <p className="text-sm text-gray-600">See exactly where you rank and what's missing</p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-bold mb-2">Quick Win Recommendations</h3>
                <p className="text-sm text-gray-600">Actionable steps you can implement immediately</p>
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6 text-coral" />
                </div>
                <h3 className="font-bold mb-2">Custom Plan Aligned to Your Goals</h3>
                <p className="text-sm text-gray-600">Get Found → Get Trusted → Get Booked</p>
              </CardContent>
            </Card>
          </div>

          {/* Secondary CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Prefer to chat?</p>
            <a href="https://calendly.com/hello-purerankmedia/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-coral text-coral hover:bg-coral/10 bg-transparent">
                Book a Strategy Call
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
