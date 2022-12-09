import './portfolioList.scss';

export default function PortfolioList({id, title, active, setSelected}) {
  return (
    <li className={active ? "portfolio active": "portfolio"} onClick={() => setSelected(id)}>{title}</li>
  )
}
