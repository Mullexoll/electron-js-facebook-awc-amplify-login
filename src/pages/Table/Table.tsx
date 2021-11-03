import s from "./Table.module.css";

export const Table = (props: any) => {
   return (
      <div>
         {props.data.map((d: any) => {
            return (
               <div className={s.main_container}>
                  <div className={s.td}>{d.id}</div>
                  <div className={s.td}>{d.name}</div>
                  <div className={s.td}>{d.value}</div>
               </div>
            );
         })}
      </div>
   );
};
