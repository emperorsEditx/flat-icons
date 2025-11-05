import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'transparent',
    borderRadius: 0,
    fontWeight: 700,
    fontSize: '18px'
},
[`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.background.default == 'hsl(222,83%,98%)' ? '#fff' : '',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  user_id: number,
  pack_id: number,
  pack_name: string,
  pack_icons: number,
  category: string,
  sub_category: string,
  styles: string,
  date: string,
  stage: string,
) {
  return { user_id, pack_id, pack_name, pack_icons, category, sub_category, styles, date, stage };
}

const rows = [
  createData(17088552, 10987622, 'Animals and Birds', 50, 'Education', 'ABC', 'Glyph', 'Sep, 13 2025', 'Under Review'),
  createData(17088553, 10987622, 'Animals and Birds', 50, 'Education', 'ABC', 'Glyph', 'Sep, 13 2025', 'Under Review'),
  createData(17088554, 10987622, 'Animals and Birds', 50, 'Education', 'ABC', 'Glyph', 'Sep, 13 2025', 'Under Review'),
  createData(17088555, 10987622, 'Animals and Birds', 50, 'Education', 'ABC', 'Glyph', 'Sep, 13 2025', 'Under Review'),
  createData(17088556, 10987622, 'Animals and Birds', 50, 'Education', 'ABC', 'Glyph', 'Sep, 13 2025', 'Under Review'),
  createData(17088557, 10987622, 'Animals and Birds', 50, 'Education', 'ABC', 'Glyph', 'Sep, 13 2025', 'Under Review'),
  createData(17088558, 10987622, 'Animals and Birds', 50, 'Education', 'ABC', 'Glyph', 'Sep, 13 2025', 'Under Review'),
  createData(17088559, 10987622, 'Animals and Birds', 50, 'Education', 'ABC', 'Glyph', 'Sep, 13 2025', 'Under Review'),
];

export default function UploadTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>User ID</StyledTableCell>
            <StyledTableCell>Pack ID</StyledTableCell>
            <StyledTableCell>Pack Name</StyledTableCell>
            <StyledTableCell>Pack Icons</StyledTableCell>
            <StyledTableCell>Categories</StyledTableCell>
            <StyledTableCell>Sub Categories</StyledTableCell>
            <StyledTableCell>Styles</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Stage</StyledTableCell>
            <StyledTableCell>Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.user_id}>
              <StyledTableCell component="th" scope="row">
                {row.user_id}
              </StyledTableCell>
              <StyledTableCell>{row.pack_id}</StyledTableCell>
              <StyledTableCell>{row.pack_name}</StyledTableCell>
              <StyledTableCell>{row.pack_icons}</StyledTableCell>
              <StyledTableCell>{row.category}</StyledTableCell>
              <StyledTableCell>{row.sub_category}</StyledTableCell>
              <StyledTableCell>{row.styles}</StyledTableCell>
              <StyledTableCell>{row.date}</StyledTableCell>
              <StyledTableCell>{row.stage}</StyledTableCell>
              <StyledTableCell>kk</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
