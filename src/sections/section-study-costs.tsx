import study from '../lib/sabina/study-in-australia.json'
import heroSideImg from '../lib/figma-exports/solutions--mask-group.png'
import DataTable from '../components/DataTable'

export default function SectionStudyCosts() {
  return (
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
  )
}
