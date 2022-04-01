import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { rows } from "../../data/shopTableData";

export default function ShopTable(props) {
  const poprows = props.rows
  return (
    <div className="tableShop">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {poprows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.costumes} </TableCell>
                <TableCell align="right">{row.accessories}</TableCell>
                <TableCell align="right">{row.booster}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
