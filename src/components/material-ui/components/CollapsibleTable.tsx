import { useState, useEffect } from 'react';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


type RowProps = {
    row: any;
}

type FilterType = { 
    modifiedDateTime: number; 
};

function Row({ row }: RowProps) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <TableRow>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell>{row[0].id}</TableCell>
                <TableCell>{row[0].modifiedDateTime}</TableCell>
                <TableCell>{row[0].user}</TableCell>
                <TableCell>{row[0].action}</TableCell>
                <TableCell>{row[0].adPackage}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Table aria-label="purchases">
                            <TableBody>
                                {row.slice(1).map((item: any) => (
                                    <TableRow key={item.id}>
                                        <TableCell />
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.modifiedDateTime}</TableCell>
                                        <TableCell>{item.user}</TableCell>
                                        <TableCell>{item.action}</TableCell>
                                        <TableCell>{item.adPackage}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const CollapsibleTable = () => {
    const [state, setState] = useState<any[] | null>(null);

    useEffect(() => {
        const getpackageList = async () => {
            const URL = 'https://b5d9f207-52eb-492d-8f90-a1052a370bf9.mock.pstmn.io/selectedAdPackages';
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            const data = await response.json();
            const uniqueId = [...new Set(data.map((item: { id: any; }) => item.id))];
            const filteredArray = uniqueId.map(uid => {
                const arr = data
                    .filter((item: { id: unknown; }) => item.id === uid)
                    .sort((a: FilterType, b: FilterType) => (a.modifiedDateTime < b.modifiedDateTime ? a : -1));
                return arr;
            });

            setState(filteredArray);
        };
        getpackageList();
    }, []);
    return (
        state && (
            <TableContainer 
                style={{
                    width: '800px',
                    height: '400px',
                }}
            >
                <Table 
                    aria-label="collapsible table"
                    style={{
                        border: '1px solid rgba(224, 224, 224, 1)',
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>ID</TableCell>
                            <TableCell>DATE TIME</TableCell>
                            <TableCell>USER</TableCell>
                            <TableCell>ACTION TAKEN</TableCell>
                            <TableCell>AD PACKAGE</TableCell>
                            <TableCell>ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {state?.map((itemArr: any, i: number) => <Row key={i} row={itemArr} />)}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
};

export default CollapsibleTable;
