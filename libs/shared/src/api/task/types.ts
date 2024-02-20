import type {
    Nil,
    PaginationRequest,
    PaginationResponse,
    Prettify,
    WorkspaceRelation,
} from '@myapp/shared/definition';

export type TaskData = Record<string, Nil<any>>;

export type TaskMetadata = string;

export type ParsedTaskMetadata = Record<string, Nil<any>>;

export enum TaskStatus {
  PENDING = 'PENDING',
  FAILED = 'FAILED',
  SUCCESS = 'SUCCESS',
}

export type Task<
  D extends TaskData = TaskData,
  M extends TaskMetadata = TaskMetadata
> = Prettify<
  {
    type?: string;
    name?: string;
    metadata: M;
    parsedMetadata: ParsedTaskMetadata;
    value: string;
    workspace: WorkspaceRelation;
    status: TaskStatus;
    created: string;
  } & D
>;

export type CreateTaskRequest<T extends TaskData = TaskData> = Pick<
  Task,
  'type' | 'name'
> & { size?: number; data: T };

export type UpdateTaskRequest<T extends TaskData = TaskData> = Pick<
  Task,
  'type' | 'name'
> & { size?: number; data: T };

export enum TaskType {
  EXPORT = 'export',
}

export enum TaskGroup {
  SIMILARITY = 'SIMILARITY',
  TEXT = 'TEXT',
}

export type BrowseTasksParams = {
  name?: string;
  id?: string;
  type?: TaskType;
  group?: TaskGroup;
  workspaceId: string;
};

export type BrowseTasksRequest = PaginationRequest<BrowseTasksParams>;

export type BrowseTasksResponse = PaginationResponse<
  Task<TaskData, TaskMetadata>
>;
