
"use client";
import React, { useMemo, useState, useEffect } from "react";
import { useSubmitContactForm } from "@/hooks/useSubmitContactForm";

const initialCosts: { [key: string]: { inside: number; outside: number, checked: boolean } } = {
  "offer_letter": { inside: 279.00, outside: 279.00, checked: true },
  "insurance": { inside: 189.00, outside: 189.00, checked: true },
  "labor_1": { inside: 355.00, outside: 355.00, checked: false },
  "labor_2": { inside: 1285.00, outside: 1285.00, checked: true },
  "labor_3": { inside: 3550.77, outside: 3550.77, checked: false },
  "entry_permit": { inside: 1125.65, outside: 475.65, checked: true },
  "change_status": { inside: 675.65, outside: 0.00, checked: true },
  "emirates_id": { inside: 386.00, outside: 386.00, checked: true },
  "medical_test": { inside: 322.50, outside: 322.50, checked: true },
  "visa_stamping": { inside: 547.00, outside: 547.00, checked: true },
  "contract_submission": { inside: 83.00, outside: 83.00, checked: true },
};

export default function AmerArea({ dictionary }: { dictionary: any }) {
  const [steps, setSteps] = useState(
    dictionary.steps.map((step: any) => ({
      ...step,
      ...initialCosts[step.id],
    }))
  );
  const [totalInside, setTotalInside] = useState(0);
  const [totalOutside, setTotalOutside] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState("");
  const { status, isSubmitting, submit } = useSubmitContactForm();

  const statusMessage = useMemo(() => {
    if (status === "success") return dictionary.form.success_message;
    if (status === "error") return dictionary.form.error_message;
    return "";
  }, [dictionary.form.error_message, dictionary.form.success_message, status]);

  useEffect(() => {
    let insideSum = 0;
    let outsideSum = 0;
    steps.forEach((step: any) => {
      if (step.checked) {
        insideSum += step.inside;
        outsideSum += step.outside;
      }
    });
    setTotalInside(insideSum);
    setTotalOutside(outsideSum);
  }, [steps]);

  const handleCheckboxChange = (id: string) => {
    setSteps((prevSteps: any) => {
      const clickedStep = prevSteps.find((step: any) => step.id === id);
      if (!clickedStep) return prevSteps;

      if (clickedStep.group) {
        if (clickedStep.checked) {
          return prevSteps.map((step: any) =>
            step.id === id ? { ...step, checked: false } : step
          );
        }
        return prevSteps.map((step: any) => {
          if (step.group === clickedStep.group) {
            return { ...step, checked: step.id === id };
          }
          return step;
        });
      } else {
        return prevSteps.map((step: any) =>
          step.id === id ? { ...step, checked: !step.checked } : step
        );
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const name = get("name");
    const email = get("email");
    const phone = get("phone");
    const country = get("country");

    const selectedSteps = steps
      .filter((step: any) => step.checked)
      .map(
        (step: any) =>
          `${step.label} (Inside: ${step.inside.toFixed(2)}, Outside: ${step.outside.toFixed(2)})`
      );

    const messageLines = [
      country ? `Applicant location: ${country}` : null,
      selectedSteps.length ? `Selected steps:\n- ${selectedSteps.join("\n- ")}` : null,
      `Total (Inside): ${totalInside.toFixed(2)}`,
      `Total (Outside): ${totalOutside.toFixed(2)}`,
    ].filter(Boolean);

    const ok = await submit(
      {
        name,
        email,
        phone,
        message: messageLines.join("\n"),
        website: get("website"),
        formType: dictionary.form.title || dictionary.header_title || "Amer Consultation",
        service: dictionary.header_title || "Amer Services",
      },
      form
    );

    if (ok) {
      setSelectedCountry("");
    }
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: '60px' }}>
      <div className="container">
        <div className="cost-calculator-container" data-aos="fade-up" data-aos-delay="200">
          <div className="cost-calculator-main">
            <table className="cost-calculator-table">
              <thead>
                <tr>
                  <th>{dictionary.table_headers.step}</th>
                  <th>{dictionary.table_headers.inside}</th>
                  <th>{dictionary.table_headers.outside}</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((step: any) => (
                  <tr key={step.id}>
                    <td>
                      <label className="cost-calculator-checkbox">
                        <input
                          type="checkbox"
                          checked={step.checked}
                          onChange={() => handleCheckboxChange(step.id)}
                        />
                        <span className="checkmark"></span>
                        {step.label}
                      </label>
                    </td>
                    <td>{step.inside.toFixed(2)}</td>
                    <td>{step.outside.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="cost-calculator-sidebar">
            <div className="cost-totals">
              <div className={`cost-total-item ${selectedCountry && selectedCountry !== 'inside' ? 'dimmed' : ''}`}>
                <span className="cost-total-amount">{totalInside.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span className="cost-total-label">{dictionary.totals.inside}</span>
              </div>
              <div className={`cost-total-item ${selectedCountry && selectedCountry !== 'outside' ? 'dimmed' : ''}`}>
                <span className="cost-total-amount">{totalOutside.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                <span className="cost-total-label">{dictionary.totals.outside}</span>
              </div>
            </div>
            <div className="trial-booking-form" style={{border: 'none', padding: '0'}}>
              <form onSubmit={handleSubmit}>
                <div className="trial-form-field" style={{ display: "none" }} aria-hidden="true">
                  <label>Website</label>
                  <input type="text" name="website" autoComplete="off" tabIndex={-1} />
                </div>
                <div className="trial-form-field">
                  <input type="text" name="name" placeholder={dictionary.form.name_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input type="tel" name="phone" placeholder={dictionary.form.phone_placeholder} required/>
                </div>
                <div className="trial-form-field">
                  <input type="email" name="email" placeholder={dictionary.form.email_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <select name="country" required value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
                    <option value="">{dictionary.form.option_placeholder}</option>
                    <option value="inside">{dictionary.form.option_inside}</option>
                    <option value="outside">{dictionary.form.option_outside}</option>
                  </select>
                </div>
                <button type="submit" className="trial-submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? dictionary.form.loading_label : dictionary.form.submit_button}
                </button>
                {statusMessage ? <p className="mt-3 mb-0">{statusMessage}</p> : null}
              </form>
              <p className="cost-calculator-note">
                {dictionary.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
