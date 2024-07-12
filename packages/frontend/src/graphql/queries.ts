/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getServiceRequest = /* GraphQL */ `query GetServiceRequest($id: ID!) {
  getServiceRequest(id: $id) {
    id
    name
    description
    creationDate
    severity
    resolutionDate
    reporterName
    contactInfo
    location
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetServiceRequestQueryVariables,
  APITypes.GetServiceRequestQuery
>;
export const listServiceRequests = /* GraphQL */ `query ListServiceRequests(
  $filter: ModelServiceRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      creationDate
      severity
      resolutionDate
      reporterName
      contactInfo
      location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceRequestsQueryVariables,
  APITypes.ListServiceRequestsQuery
>;
export const syncServiceRequests = /* GraphQL */ `query SyncServiceRequests(
  $filter: ModelServiceRequestFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncServiceRequests(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      creationDate
      severity
      resolutionDate
      reporterName
      contactInfo
      location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncServiceRequestsQueryVariables,
  APITypes.SyncServiceRequestsQuery
>;
