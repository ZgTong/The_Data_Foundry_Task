'use client';
import { generateClient } from 'aws-amplify/api';
import { Table, TableBody, TableHead, TableRow } from '@aws-amplify/ui-react';
import { useState, useEffect } from 'react';
import { Box, TableCell } from '@mui/material';
import { listServiceRequests } from '@src/graphql/queries';
import { ServiceRequest } from '@root/src/API';
import * as subscriptions from '@src/graphql/subscriptions';
import ServiceRequestCreateForm, { ServiceRequestCreateFormInputValues } from '@src/ui-components/ServiceRequestCreateForm';
import { Severity } from '@root/src/models';

function Files() {
    const client = generateClient();
    const [formData, setFormData] = useState<
        ServiceRequestCreateFormInputValues
    >();
    const [serviceRequests, setServiceRequests] = useState<ServiceRequest[]>(
        []
    );
    const calculateResolutionDate = (creationDate: Date, severity: Severity) => {
        if (!creationDate) return '';
        const creation = new Date(creationDate);
        const severityDays = {
            Low: 5,
            Medium: 3,
            High: 1,
        };
        const daysToAdd = severityDays[severity] || 0;
        creation.setDate(creation.getDate() + daysToAdd);
        return creation.toISOString().split('T')[0]; // YYYY-MM-DD
    };
    useEffect(() => {
        client
            .graphql({ query: subscriptions.onCreateServiceRequest })
            .subscribe({
                next: ({ data }) => {
                    setServiceRequests(prev => [
                        ...prev,
                        data.onCreateServiceRequest,
                    ]);
                },
                error: error => console.warn(error),
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
            <ServiceRequestCreateForm                
                overrides={{
                    resolutionDate: {
                        value: formData?.resolutionDate || '',                        
                    }
                }}
                onChange={(
                    fields: ServiceRequestCreateFormInputValues
                ): ServiceRequestCreateFormInputValues => {
                    if(fields.creationDate && fields.severity) {
                        fields.resolutionDate = calculateResolutionDate(new Date(fields.creationDate), fields.severity as Severity);
                    }
                    setFormData(fields);
                    return fields;
                }}
            />
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
                    {serviceRequests.map(
                        (item: ServiceRequest, index: number) => (
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
                        )
                    )}
                </TableBody>
            </Table>
        </Box>
    );
}

export default Files;
