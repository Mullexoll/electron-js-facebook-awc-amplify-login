import { Table } from "./Table";

export const TableData = () => {
   let data = [
      { id: 1, name: "Gob", value: 3 },
      { id: 2, name: "Buster", value: 5 },
      { id: 3, name: "George Michael", value: 4 },
   ];

   for (let i = 0; i < 1000; i++) {
      let newData = {
         id: 3 + i,
         name: "Buster" + i,
         value: 24 + i,
      };

      data.push(newData);
   }

   return <Table data={data} />;
};
