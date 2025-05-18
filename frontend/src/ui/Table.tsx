import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function Table({ children }: Props) {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
}

export default Table;

function TableHeader({ children }: Props) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }: Props) {
  return <tbody>{children}</tbody>;
}

function TableRow({ children }: Props) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.body = TableBody;
Table.row = TableRow;
