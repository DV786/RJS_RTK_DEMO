import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import { EditOffOutlined, DeleteOutline } from '@mui/icons-material'
import type { IUserData } from '../types/common'
import { useAppDispatch } from '../redux/hook'
import { removeRecord } from '../redux/record/recordSlice'

const ReactTable: React.FC<{ data: IUserData[] }> = ({ data }) => {
  const dispatch = useAppDispatch();
  const handleDeleteRecord = (id: string) => {
    dispatch(removeRecord({ id }));
  }
  return (
    <Container>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
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
                <TableCell sx={{ display: 'flex' }}>
                  <Button>
                    <EditOffOutlined />
                  </Button>
                  <Button onClick={() => handleDeleteRecord(row.id)}>
                    <DeleteOutline />
                  </Button>
                </TableCell>
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
