"use client";
import React, { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const initialCosts: { [key: string]: { inside: number; outside: number; checked: boolean } } = {
  offer_letter: { inside: 279.0, outside: 279.0, checked: true },
  insurance: { inside: 189.0, outside: 189.0, checked: true },
  labor_1: { inside: 355.0, outside: 355.0, checked: false },
  labor_2: { inside: 1285.0, outside: 1285.0, checked: true },
  labor_3: { inside: 3550.77, outside: 3550.77, checked: false },
  entry_permit: { inside: 1125.65, outside: 475.65, checked: true },
  change_status: { inside: 675.65, outside: 0.0, checked: true },
  emirates_id: { inside: 386.0, outside: 386.0, checked: true },
  medical_test: { inside: 322.5, outside: 322.5, checked: true },
  visa_stamping: { inside: 547.0, outside: 547.0, checked: true },
  contract_submission: { inside: 83.0, outside: 83.0, checked: true },
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
      }

      return prevSteps.map((step: any) =>
        step.id === id ? { ...step, checked: !step.checked } : step
      );
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) || "").toString().trim();

    const selectedSteps = steps
      .filter((step: any) => step.checked)
      .map(
        (step: any) =>
          `${step.label} (Inside: ${step.inside.toFixed(2)}, Outside: ${step.outside.toFixed(2)})`
      )
      .join(" | ");

    const whatsappUrl = buildWhatsAppUrl([
      { label: "Service", value: dictionary.header_title || "Amer Services" },
      { label: "Name", value: get("name") },
      { label: "Phone", value: get("phone") },
      { label: "Email", value: get("email") },
      { label: "Applicant Location", value: get("country") },
      { label: "Selected Steps", value: selectedSteps },
      { label: "Total Inside", value: totalInside.toFixed(2) },
      { label: "Total Outside", value: totalOutside.toFixed(2) },
    ]);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="azzle-section-padding" style={{ paddingTop: "60px" }}>
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
              <div className={`cost-total-item ${selectedCountry && selectedCountry !== "inside" ? "dimmed" : ""}`}>
                <span className="cost-total-amount">
                  {totalInside.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="cost-total-label">{dictionary.totals.inside}</span>
              </div>
              <div className={`cost-total-item ${selectedCountry && selectedCountry !== "outside" ? "dimmed" : ""}`}>
                <span className="cost-total-amount">
                  {totalOutside.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="cost-total-label">{dictionary.totals.outside}</span>
              </div>
            </div>
            <div className="trial-booking-form" style={{ border: "none", padding: "0" }}>
              <form onSubmit={handleSubmit}>
                <div className="trial-form-field">
                  <input type="text" name="name" placeholder={dictionary.form.name_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input type="tel" name="phone" placeholder={dictionary.form.phone_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <input type="email" name="email" placeholder={dictionary.form.email_placeholder} required />
                </div>
                <div className="trial-form-field">
                  <select
                    name="country"
                    required
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                  >
                    <option value="">{dictionary.form.option_placeholder}</option>
                    <option value="inside">{dictionary.form.option_inside}</option>
                    <option value="outside">{dictionary.form.option_outside}</option>
                  </select>
                </div>
                <button type="submit" className="trial-submit-btn">
                  {dictionary.form.whatsapp_button}
                </button>
              </form>
              <p className="cost-calculator-note">{dictionary.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
