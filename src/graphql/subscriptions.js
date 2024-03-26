/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserSettings = /* GraphQL */ `
  subscription OnCreateUserSettings(
    $filter: ModelSubscriptionUserSettingsFilterInput
  ) {
    onCreateUserSettings(filter: $filter) {
      id
      CreatedBy
      Initials
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateUserSettings = /* GraphQL */ `
  subscription OnUpdateUserSettings(
    $filter: ModelSubscriptionUserSettingsFilterInput
  ) {
    onUpdateUserSettings(filter: $filter) {
      id
      CreatedBy
      Initials
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteUserSettings = /* GraphQL */ `
  subscription OnDeleteUserSettings(
    $filter: ModelSubscriptionUserSettingsFilterInput
  ) {
    onDeleteUserSettings(filter: $filter) {
      id
      CreatedBy
      Initials
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      Comment
      CreatedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      Comment
      CreatedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      Comment
      CreatedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord($filter: ModelSubscriptionRecordFilterInput) {
    onCreateRecord(filter: $filter) {
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
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord($filter: ModelSubscriptionRecordFilterInput) {
    onUpdateRecord(filter: $filter) {
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
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord($filter: ModelSubscriptionRecordFilterInput) {
    onDeleteRecord(filter: $filter) {
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
export const onCreateMedia = /* GraphQL */ `
  subscription OnCreateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onCreateMedia(filter: $filter) {
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
export const onUpdateMedia = /* GraphQL */ `
  subscription OnUpdateMedia($filter: ModelSubscriptionMediaFilterInput) {
    onUpdateMedia(filter: $filter) {
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
export const onDeleteMedia = /* GraphQL */ `
  subscription OnDeleteMedia($filter: ModelSubscriptionMediaFilterInput) {
    onDeleteMedia(filter: $filter) {
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
export const onCreateCaterpillar = /* GraphQL */ `
  subscription OnCreateCaterpillar(
    $filter: ModelSubscriptionCaterpillarFilterInput
  ) {
    onCreateCaterpillar(filter: $filter) {
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
export const onUpdateCaterpillar = /* GraphQL */ `
  subscription OnUpdateCaterpillar(
    $filter: ModelSubscriptionCaterpillarFilterInput
  ) {
    onUpdateCaterpillar(filter: $filter) {
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
export const onDeleteCaterpillar = /* GraphQL */ `
  subscription OnDeleteCaterpillar(
    $filter: ModelSubscriptionCaterpillarFilterInput
  ) {
    onDeleteCaterpillar(filter: $filter) {
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
