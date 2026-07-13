import study from '../lib/sabina/study-in-australia.json'
import DataTable from '../components/DataTable'

export default function SectionStudyVisa() {
  return (
    <section className="section">
      <div className="page-width">
        <div className="data-section">
          <h3>{study.visaFeeEstimate.heading}</h3>
          <DataTable
            columns={study.visaFeeEstimate.table.columns}
            rows={study.visaFeeEstimate.table.rows}
          />
          <p className="data-table-note">{study.visaFeeEstimate.note}</p>
        </div>

        <div className="data-section">
          <h3>{study.deadlines.heading}</h3>
          <p>{study.deadlines.paragraph}</p>
        </div>

        <div className="data-section" style={{ marginBottom: 0 }}>
          <h3>{study.popularFields.heading}</h3>
          <div className="chip-list">
            {study.popularFields.items.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
