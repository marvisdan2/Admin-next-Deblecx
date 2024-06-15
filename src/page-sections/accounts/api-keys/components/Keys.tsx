import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableBody from '@mui/material/TableBody'
import TableHead from '@mui/material/TableHead'
import IconButton from '@mui/material/IconButton'
import { CopyToClipboard } from 'react-copy-to-clipboard'
// CUSTOM COMPONENTS
import Scrollbar from 'components/scrollbar'
import { FlexBox } from 'components/flexbox'
import { Tiny } from 'components/typography'
// CUSTOM ICON COMPONENTS
import Copy from 'icons/Copy'
import Delete from 'icons/Delete'
// COMMON STYLED COMPONENTS
import { BodyTableCellV2, BodyTableRow, HeadTableCell } from '../../styles'
// CUSTOM DATA
import { keys } from '../data'

export default function Keys() {
  return (
    <Scrollbar autoHide={false}>
      <Table sx={{ minWidth: 800 }}>
        <TableHead>
          <TableRow>
            <HeadTableCell>Label</HeadTableCell>
            <HeadTableCell>API Keys</HeadTableCell>
            <HeadTableCell>Created</HeadTableCell>
            <HeadTableCell>Status</HeadTableCell>
            <HeadTableCell>Action</HeadTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {keys.map((item, index) => (
            <BodyTableRow key={index}>
              <BodyTableCellV2>{item.label}</BodyTableCellV2>

              <BodyTableCellV2>
                <FlexBox alignItems="center">
                  <Tiny fontSize={12} minWidth={180}>
                    {item.key}
                  </Tiny>

                  <CopyToClipboard text={item.key} onCopy={() => true}>
                    <IconButton color="inherit">
                      <Copy fontSize="small" />
                    </IconButton>
                  </CopyToClipboard>
                </FlexBox>
              </BodyTableCellV2>

              <BodyTableCellV2>{item.created}</BodyTableCellV2>

              <BodyTableCellV2>
                <Chip
                  size="small"
                  label={item.status}
                  color={item.status === 'Inactive' ? 'error' : 'success'}
                />
              </BodyTableCellV2>

              <BodyTableCellV2>
                <IconButton color="inherit">
                  <Delete fontSize="small" />
                </IconButton>
              </BodyTableCellV2>
            </BodyTableRow>
          ))}
        </TableBody>
      </Table>
    </Scrollbar>
  )
}
