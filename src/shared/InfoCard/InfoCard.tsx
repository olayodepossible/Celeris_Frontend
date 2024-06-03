import './InfoCard.css';

export interface IInfo {
  title: string;
  amount: string;
  color: string;
}
interface IInfoCardProps {
  infos: IInfo[];
}

const InfoCard = ({ infos }: IInfoCardProps) => {
  return (
    <div className="infoCard grid justify-content-evenly flex-lg-row flex-column">
      {infos &&
        infos?.map((info: IInfo, index) => (
          <div key={index}>
            <h3>{info.title}</h3>
            <p style={{ color: info.color }}>{info.amount}</p>
          </div>
        ))}
    </div>
  );
};

export default InfoCard;
