import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Severity {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High"
}



type EagerServiceRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly creationDate: string;
  readonly severity: Severity | keyof typeof Severity;
  readonly resolutionDate?: string | null;
  readonly reporterName: string;
  readonly contactInfo: string;
  readonly location: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyServiceRequest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ServiceRequest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly creationDate: string;
  readonly severity: Severity | keyof typeof Severity;
  readonly resolutionDate?: string | null;
  readonly reporterName: string;
  readonly contactInfo: string;
  readonly location: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ServiceRequest = LazyLoading extends LazyLoadingDisabled ? EagerServiceRequest : LazyServiceRequest

export declare const ServiceRequest: (new (init: ModelInit<ServiceRequest>) => ServiceRequest) & {
  copyOf(source: ServiceRequest, mutator: (draft: MutableModel<ServiceRequest>) => MutableModel<ServiceRequest> | void): ServiceRequest;
}