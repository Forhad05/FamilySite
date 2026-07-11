import '../App.css'
import study from '../lib/sabina/study-in-australia.json'
import heroSideImg from '../lib/figma-exports/solutions--mask-group.png'
import { usePageMeta } from '../hooks/usePageMeta'

function DataTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function StudyInAustraliaPage() {
  usePageMeta(
    'Study in Australia',
    'Programs, costs, intakes, and what to prepare for studying in Australia — explained plainly.',
  )

  return (
    <>
      <section className="page-hero">
        <div className="page-width">
          <h1>{study.heading}</h1>
          <p>{study.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="section-row" style={{ marginBottom: '48px' }}>
            <div className="section-copy">
              <h3>{study.programAndDuration.heading}</h3>
              <p>{study.programAndDuration.paragraph}</p>
            </div>
            <div className="section-art">
              <div className="illustration">
                <img src={heroSideImg} alt="Planning a study pathway to Australia" />
              </div>
            </div>
          </div>

          <div className="data-section">
            <DataTable
              columns={study.programAndDuration.table.columns}
              rows={study.programAndDuration.table.rows}
            />
          </div>

          <div className="data-section">
            <h3>{study.costEstimates.heading}</h3>
            <DataTable
              columns={study.costEstimates.tuitionTable.columns}
              rows={study.costEstimates.tuitionTable.rows}
            />
            <h3>{study.costEstimates.livingExpenseTable.heading}</h3>
            <DataTable
              columns={study.costEstimates.livingExpenseTable.columns}
              rows={study.costEstimates.livingExpenseTable.rows}
            />
            <p className="data-table-note">{study.note}</p>
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="page-width">
          <div className="data-section">
            <h3>{study.intakes.heading}</h3>
            <p>{study.intakes.paragraph}</p>
            <ul className="checklist" style={{ margin: '16px 0' }}>
              {study.intakes.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="data-table-note">{study.intakes.note}</p>
          </div>

          <div className="data-section">
            <h3>{study.oshc.heading}</h3>
            <p>{study.oshc.paragraph}</p>
          </div>
        </div>
      </section>

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
    </>
  )
}
