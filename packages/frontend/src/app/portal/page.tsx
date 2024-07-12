'use client';
import { generateClient } from 'aws-amplify/api';
import {
    Table,
    TableBody,
    TableHead,
    TableRow
} from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
import { Box, TableCell } from '@mui/material';
import ServiceRequestCreateForm from '@src/ui-components/ServiceRequestCreateForm';
import { listServiceRequests } from '@src/graphql/queries';
import { ServiceRequest } from '@root/src/API';
import * as subscriptions from '@src/graphql/subscriptions';

function Files() {
    const client = generateClient();
    const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>([]);
    useEffect(() => {

        client
        .graphql({ query: subscriptions.onCreateServiceRequest })
        .subscribe({
            next: ({ data }) => {
                setServiceRequests((prev) => [...prev, data.onCreateServiceRequest]);            
            },
            error: (error) => console.warn(error)
        });
        const fetchData = async () => {
            const restOperation = await client.graphql({
                query: listServiceRequests,
            });
            if (restOperation.data) {
                setServiceRequests(
                    restOperation.data.listServiceRequests.items
                );
            }
        };
        fetchData();
    }, []);

    return (
        <Box
            sx={{
                width: '100%',
                padding: '30px 5%',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            {/* from */}
            <ServiceRequestCreateForm />
            {/* list */}
            <Table variation='bordered'>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Request Name</TableCell>
                        <TableCell>Request Desc</TableCell>
                        <TableCell>Creation Date</TableCell>
                        <TableCell>Severity</TableCell>
                        <TableCell>Resolution Date</TableCell>
                        <TableCell>Reporter Name</TableCell>
                        <TableCell>Contact Info</TableCell>
                        <TableCell>Location</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        serviceRequests.map((item: ServiceRequest, index: number) => (
                            <TableRow key={index}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.creationDate}</TableCell>
                                <TableCell>{item.severity}</TableCell>
                                <TableCell>{item.resolutionDate}</TableCell>
                                <TableCell>{item.reporterName}</TableCell>
                                <TableCell>{item.contactInfo}</TableCell>
                                <TableCell>{item.location}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </Box>
    );
}

export default Files;
