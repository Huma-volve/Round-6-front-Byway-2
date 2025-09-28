import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PaymentHistory() {
  return (
    <div className="container mx-auto mt-20">
      <div className="border-1 rounded-2xl overflow-hidden pl-5 pr-5 ">
        <Table className="border-separate border-spacing-0">
          <TableHeader>
            <TableRow>
              <TableHead className="text-[#587DBD] font-semibold text-xl border-b">
                Date
              </TableHead>
              <TableHead className="text-[#587DBD] font-semibold text-xl border-b">
                Course
              </TableHead>
              <TableHead className="text-[#587DBD] font-semibold text-xl border-b">
                Amount
              </TableHead>
              <TableHead className="text-[#587DBD] font-semibold text-xl border-b">
                Method
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-lg border-b">Apr 20, 2024</TableCell>
              <TableCell className="text-lg text-[#5BAE61] border-b">
                UI/UX Design
              </TableCell>
              <TableCell className="text-lg border-b">400 EGP</TableCell>
              <TableCell className="text-lg border-b">Credit Card</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
