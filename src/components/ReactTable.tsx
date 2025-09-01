import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { useAppSelector } from '../redux/hook';
import type { RootState } from '../redux/store';

const ReactTable = () => {
  const { data } = useAppSelector((state: RootState) => state.record)

  return (
    <Container>
      <TableContainer>
        <Table sx={{ minWidth: 650, borderRadius: '1px solid' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>ZipCode</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Total Experience</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data === null || data?.length === 0 ? (
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                No item found
              </TableRow>
            ) : (
              data?.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.address}</TableCell>
                <TableCell>{row.zip}</TableCell>
                <TableCell>{row.city}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.country}</TableCell>
                <TableCell>{row.companyName}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>{row.yearsOfExperience}</TableCell>
              </TableRow>
            ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ReactTable
