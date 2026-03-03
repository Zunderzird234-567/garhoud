
import Count from "@/common/count";

export default function AboutCounter({ dictionary }: { dictionary: any }) {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="azzle-counter-column">
            {dictionary.counter.map((item: any, i: number) => (
              <div key={i} className="azzle-counter-item azzle-counter-item2">
                <h2 className="azzle-counter-data azzle-counter-data2">
                  <Count number={item.end} text={item.suffix} />
                </h2>
                <p>{item.label}</p>
              </div>
            ))} 
          </div>
        </div>
      </div>
    </div>
  )
}
