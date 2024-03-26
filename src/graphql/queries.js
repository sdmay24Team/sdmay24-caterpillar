/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserSettings = /* GraphQL */ `
  query GetUserSettings($id: ID!) {
    getUserSettings(id: $id) {
      id
      CreatedBy
      Initials
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUserSettings = /* GraphQL */ `
  query ListUserSettings(
    $filter: ModelUserSettingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CreatedBy
        Initials
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      Comment
      CreatedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Comment
        CreatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
      id
      Date
      Time
      LocationOnPlant
      Status
      Comment {
        id
        Comment
        CreatedBy
        createdAt
        updatedAt
        __typename
      }
      Initials
      caterpillarID
      CreatedBy
      Stage
      Cage
      createdAt
      updatedAt
      recordCommentId
      __typename
    }
  }
`;
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Date
        Time
        LocationOnPlant
        Status
        Comment {
          id
          Comment
          CreatedBy
          createdAt
          updatedAt
          __typename
        }
        Initials
        caterpillarID
        CreatedBy
        Stage
        Cage
        createdAt
        updatedAt
        recordCommentId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const recordsByCaterpillarID = /* GraphQL */ `
  query RecordsByCaterpillarID(
    $caterpillarID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    recordsByCaterpillarID(
      caterpillarID: $caterpillarID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Date
        Time
        LocationOnPlant
        Status
        Comment {
          id
          Comment
          CreatedBy
          createdAt
          updatedAt
          __typename
        }
        Initials
        caterpillarID
        CreatedBy
        Stage
        Cage
        createdAt
        updatedAt
        recordCommentId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMedia = /* GraphQL */ `
  query GetMedia($id: ID!) {
    getMedia(id: $id) {
      id
      CaterpillarID
      BlobID
      CreatedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listMedia = /* GraphQL */ `
  query ListMedia(
    $filter: ModelMediaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMedia(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        CaterpillarID
        BlobID
        CreatedBy
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getCaterpillar = /* GraphQL */ `
  query GetCaterpillar($id: ID!) {
    getCaterpillar(id: $id) {
      id
      IndividualID
      CreatedBy
      DateFound
      SiteFound
      LocationFound
      TimeFound
      HostPlant
      CollectedBy
      Stage
      Slot
      Records {
        items {
          id
          Date
          Time
          LocationOnPlant
          Status
          Comment {
            id
            Comment
            CreatedBy
            createdAt
            updatedAt
            __typename
          }
          Initials
          caterpillarID
          CreatedBy
          Stage
          Cage
          createdAt
          updatedAt
          recordCommentId
          __typename
        }
        nextToken
        __typename
      }
      DateEclosed
      DateReleased
      RegionReleased
      LocationReleased
      Cage
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listCaterpillars = /* GraphQL */ `
  query ListCaterpillars(
    $filter: ModelCaterpillarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaterpillars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        IndividualID
        CreatedBy
        DateFound
        SiteFound
        LocationFound
        TimeFound
        HostPlant
        CollectedBy
        Stage
        Slot
        Records {
          items {
            id
            Date
            Time
            LocationOnPlant
            Status
            Initials
            caterpillarID
            CreatedBy
            Stage
            Cage
            createdAt
            updatedAt
            recordCommentId
            __typename
          }
          nextToken
          __typename
        }
        DateEclosed
        DateReleased
        RegionReleased
        LocationReleased
        Cage
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
