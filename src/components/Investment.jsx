import moment from "moment";
import React from "react";
import { investmentPlans } from "../data";

const Investment = ({ el }) => {
  const endDate = (date, day) => {
    const t = new Date(date);
    const man = new Date(t.setDate(t.getDate() + day));
    return moment(man).format("YYYY MM DD hh:mm:ss A");
  };

  const getDuration = () => {
    return investmentPlans.find((l) => l.id === el.plan).duration/24;
  };

  const getPlan = ()=>{
    return investmentPlans.find((l) => l.id === el.plan);
  }

  return (
    <tr className="deposit-right-table-row">
      <td>#{el._id.slice(0, 6)}</td>
      <td>${el.amount}</td>
      <td>{getPlan().interest}%</td>
      <td>{getPlan().name}</td>
      <td className="span2">{moment(el.createdAt).format("YYYY MM DD:hhmm A")}</td>
      <td className="span2">{endDate(el.createdAt, getDuration())}</td>
      <td>{el.status}</td>
      <td>
        <button>Cancel</button>
      </td>
    </tr>
  );
};

export default Investment;
