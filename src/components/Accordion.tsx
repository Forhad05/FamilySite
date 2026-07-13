import { useId, useState, type ReactNode } from 'react'
import { IconChevronDown } from '../lib/Icons'

export type AccordionEntry = {
  header: ReactNode
  body: ReactNode
}

type AccordionProps = {
  items: AccordionEntry[]
  /** Index of the item open on mount; null starts fully collapsed. */
  defaultOpen?: number | null
}

export default function Accordion({ items, defaultOpen = null }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen)
  const baseId = useId()

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const headerId = `${baseId}-header-${index}`
        const panelId = `${baseId}-panel-${index}`
        return (
          <div className={`accordion-item${isOpen ? ' open' : ''}`} key={index}>
            <h3 className="accordion-header">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span>{item.header}</span>
                <IconChevronDown width={24} height={24} iconClass="accordion-chevron" />
              </button>
            </h3>
            <div className="accordion-panel" id={panelId} role="region" aria-labelledby={headerId}>
              <div className="accordion-panel-clip">
                <div className="accordion-body">{item.body}</div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
