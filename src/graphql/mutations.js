/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserSettings = /* GraphQL */ `
  mutation CreateUserSettings(
    $input: CreateUserSettingsInput!
    $condition: ModelUserSettingsConditionInput
  ) {
    createUserSettings(input: $input, condition: $condition) {
      id
      CreatedBy
      Initials
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserSettings = /* GraphQL */ `
  mutation UpdateUserSettings(
    $input: UpdateUserSettingsInput!
    $condition: ModelUserSettingsConditionInput
  ) {
    updateUserSettings(input: $input, condition: $condition) {
      id
      CreatedBy
      Initials
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserSettings = /* GraphQL */ `
  mutation DeleteUserSettings(
    $input: DeleteUserSettingsInput!
    $condition: ModelUserSettingsConditionInput
  ) {
    deleteUserSettings(input: $input, condition: $condition) {
      id
      CreatedBy
      Initials
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      Comment
      CreatedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      Comment
      CreatedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      Comment
      CreatedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
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
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
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
export const deleteRecord = /* GraphQL */ `
  mutation DeleteRecord(
    $input: DeleteRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    deleteRecord(input: $input, condition: $condition) {
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
export const createMedia = /* GraphQL */ `
  mutation CreateMedia(
    $input: CreateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    createMedia(input: $input, condition: $condition) {
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
export const updateMedia = /* GraphQL */ `
  mutation UpdateMedia(
    $input: UpdateMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    updateMedia(input: $input, condition: $condition) {
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
export const deleteMedia = /* GraphQL */ `
  mutation DeleteMedia(
    $input: DeleteMediaInput!
    $condition: ModelMediaConditionInput
  ) {
    deleteMedia(input: $input, condition: $condition) {
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
export const createCaterpillar = /* GraphQL */ `
  mutation CreateCaterpillar(
    $input: CreateCaterpillarInput!
    $condition: ModelCaterpillarConditionInput
  ) {
    createCaterpillar(input: $input, condition: $condition) {
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
export const updateCaterpillar = /* GraphQL */ `
  mutation UpdateCaterpillar(
    $input: UpdateCaterpillarInput!
    $condition: ModelCaterpillarConditionInput
  ) {
    updateCaterpillar(input: $input, condition: $condition) {
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
export const deleteCaterpillar = /* GraphQL */ `
  mutation DeleteCaterpillar(
    $input: DeleteCaterpillarInput!
    $condition: ModelCaterpillarConditionInput
  ) {
    deleteCaterpillar(input: $input, condition: $condition) {
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
