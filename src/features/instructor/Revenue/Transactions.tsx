import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

const Transactions = () => {


    const data =[
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
        {Name: "Jon Doe" , Date : "12/04/2024" , Method : "Credit Card" , Amount : "$95.00"},
    ]


  return <>
  <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Name</TableHead>
      <TableHead className="w-[100px]" >Date</TableHead>
      <TableHead className="w-[100px]">Method</TableHead>
      <TableHead className="text-right w-[100px]">Amount</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
      {data.map((item , index) => (
        <TableRow key={index} className="hover:border-[#fcfcfc] hover:bg-[#f7f7f8] transition duration-300">
          <TableCell>{item.Name}</TableCell>
          <TableCell>{item.Date}</TableCell>
          <TableCell className="text-green-500">{item.Method}</TableCell>
          <TableCell className="text-right w-[100px]">{item.Amount}</TableCell>
    </TableRow>
      ))}
  </TableBody>
  
</Table>
  </>
}

export default Transactions