export interface ProtobufAny {
    typeUrl?: string;
    /** @format byte */
    value?: string;
}
export interface RpcStatus {
    /** @format int32 */
    code?: number;
    message?: string;
    details?: ProtobufAny[];
}
/**
* message SomeRequest {
         Foo some_parameter = 1;
         PageRequest pagination = 2;
 }
*/
export interface V1Beta1PageRequest {
    /**
     * key is a value returned in PageResponse.next_key to begin
     * querying the next page most efficiently. Only one of offset or key
     * should be set.
     * @format byte
     */
    key?: string;
    /**
     * offset is a numeric offset that can be used when key is unavailable.
     * It is less efficient than using key. Only one of offset or key should
     * be set.
     * @format uint64
     */
    offset?: string;
    /**
     * limit is the total number of results to be returned in the result page.
     * If left empty it will default to a value to be set by each app.
     * @format uint64
     */
    limit?: string;
    /**
     * count_total is set to true  to indicate that the result set should include
     * a count of the total number of items available for pagination in UIs.
     * count_total is only respected when offset is used. It is ignored when key
     * is set.
     */
    countTotal?: boolean;
}
/**
* PageResponse is to be embedded in gRPC response messages where the
corresponding request message has used PageRequest.

 message SomeResponse {
         repeated Bar results = 1;
         PageResponse page = 2;
 }
*/
export interface V1Beta1PageResponse {
    /** @format byte */
    nextKey?: string;
    /** @format uint64 */
    total?: string;
}
export interface VoterAttendance {
    creator?: string;
    /** @format uint64 */
    id?: string;
    time?: string;
}
export interface VoterInformation {
    creator?: string;
    /** @format uint64 */
    id?: string;
    name?: string;
    dob?: string;
    address?: string;
    email?: string;
    phone?: string;
}
export interface VoterMsgCreateAttendanceResponse {
    /** @format uint64 */
    id?: string;
    time?: string;
}
export interface VoterMsgCreateInformationResponse {
    /** @format uint64 */
    id?: string;
}
export interface VoterMsgCreateRequestAttendanceResponse {
    /** @format uint64 */
    id?: string;
}
export declare type VoterMsgDeleteAttendanceResponse = object;
export declare type VoterMsgDeleteInformationResponse = object;
export declare type VoterMsgDeleteRequestAttendanceResponse = object;
export declare type VoterMsgUpdateAttendanceResponse = object;
export declare type VoterMsgUpdateInformationResponse = object;
export interface VoterMsgUpdateRequestAttendanceResponse {
    creator?: string;
    /** @format int64 */
    id?: number;
    receiver?: string;
    accepted?: string;
}
export interface VoterQueryAllAttendanceResponse {
    Attendance?: VoterAttendance[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface VoterQueryAllInformationResponse {
    Information?: VoterInformation[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface VoterQueryAllRequestAttendanceResponse {
    RequestAttendance?: VoterRequestAttendance[];
    /**
     * PageResponse is to be embedded in gRPC response messages where the
     * corresponding request message has used PageRequest.
     *
     *  message SomeResponse {
     *          repeated Bar results = 1;
     *          PageResponse page = 2;
     *  }
     */
    pagination?: V1Beta1PageResponse;
}
export interface VoterQueryGetAttendanceResponse {
    Attendance?: VoterAttendance;
}
export interface VoterQueryGetInformationResponse {
    Information?: VoterInformation;
}
export interface VoterQueryGetRequestAttendanceResponse {
    RequestAttendance?: VoterRequestAttendance;
}
export interface VoterRequestAttendance {
    creator?: string;
    /** @format uint64 */
    id?: string;
    time?: string;
    receiver?: string;
    accepted?: boolean;
}
export declare type QueryParamsType = Record<string | number, any>;
export declare type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;
export interface FullRequestParams extends Omit<RequestInit, "body"> {
    /** set parameter to `true` for call `securityWorker` for this request */
    secure?: boolean;
    /** request path */
    path: string;
    /** content type of request body */
    type?: ContentType;
    /** query params */
    query?: QueryParamsType;
    /** format of response (i.e. response.json() -> format: "json") */
    format?: keyof Omit<Body, "body" | "bodyUsed">;
    /** request body */
    body?: unknown;
    /** base url */
    baseUrl?: string;
    /** request cancellation token */
    cancelToken?: CancelToken;
}
export declare type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;
export interface ApiConfig<SecurityDataType = unknown> {
    baseUrl?: string;
    baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
    securityWorker?: (securityData: SecurityDataType) => RequestParams | void;
}
export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
    data: D;
    error: E;
}
declare type CancelToken = Symbol | string | number;
export declare enum ContentType {
    Json = "application/json",
    FormData = "multipart/form-data",
    UrlEncoded = "application/x-www-form-urlencoded"
}
export declare class HttpClient<SecurityDataType = unknown> {
    baseUrl: string;
    private securityData;
    private securityWorker;
    private abortControllers;
    private baseApiParams;
    constructor(apiConfig?: ApiConfig<SecurityDataType>);
    setSecurityData: (data: SecurityDataType) => void;
    private addQueryParam;
    protected toQueryString(rawQuery?: QueryParamsType): string;
    protected addQueryParams(rawQuery?: QueryParamsType): string;
    private contentFormatters;
    private mergeRequestParams;
    private createAbortSignal;
    abortRequest: (cancelToken: CancelToken) => void;
    request: <T = any, E = any>({ body, secure, path, type, query, format, baseUrl, cancelToken, ...params }: FullRequestParams) => Promise<HttpResponse<T, E>>;
}
/**
 * @title voter/query.proto
 * @version version not set
 */
export declare class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
    /**
     * No description
     *
     * @tags Query
     * @name QueryRequestAttendanceAll
     * @request GET:/username/voter/voter/RequestAttendance
     */
    queryRequestAttendanceAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<VoterQueryAllRequestAttendanceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryRequestAttendance
     * @summary this line is used by starport scaffolding # 2
     * @request GET:/username/voter/voter/RequestAttendance/{id}
     */
    queryRequestAttendance: (id: string, query?: {
        receiver?: string;
    }, params?: RequestParams) => Promise<HttpResponse<VoterQueryGetRequestAttendanceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAttendanceAll
     * @request GET:/username/voter/voter/attendance
     */
    queryAttendanceAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<VoterQueryAllAttendanceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryAttendance
     * @request GET:/username/voter/voter/attendance/{id}
     */
    queryAttendance: (id: string, params?: RequestParams) => Promise<HttpResponse<VoterQueryGetAttendanceResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryInformationAll
     * @request GET:/username/voter/voter/information
     */
    queryInformationAll: (query?: {
        "pagination.key"?: string;
        "pagination.offset"?: string;
        "pagination.limit"?: string;
        "pagination.countTotal"?: boolean;
    }, params?: RequestParams) => Promise<HttpResponse<VoterQueryAllInformationResponse, RpcStatus>>;
    /**
     * No description
     *
     * @tags Query
     * @name QueryInformation
     * @request GET:/username/voter/voter/information/{id}
     */
    queryInformation: (id: string, query?: {
        creator?: string;
    }, params?: RequestParams) => Promise<HttpResponse<VoterQueryGetInformationResponse, RpcStatus>>;
}
export {};
