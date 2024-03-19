/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPupaeCheck = /* GraphQL */ `
  mutation CreatePupaeCheck(
    $input: CreatePupaeCheckInput!
    $condition: ModelPupaeCheckConditionInput
  ) {
    createPupaeCheck(input: $input, condition: $condition) {
      id
      DatePupated
      Caterpillar {
        id
        Notes
        momID
        State
        createdAt
        updatedAt
        __typename
      }
      ReleaseDate
      ReleaseSite {
        Country
        State
        Address
        Notes
        __typename
      }
      Emerged
      Weather {
        Humidity
        Temperature
        __typename
      }
      BucketID
      Bucket {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      pupaeCheckCaterpillarId
      __typename
    }
  }
`;
export const updatePupaeCheck = /* GraphQL */ `
  mutation UpdatePupaeCheck(
    $input: UpdatePupaeCheckInput!
    $condition: ModelPupaeCheckConditionInput
  ) {
    updatePupaeCheck(input: $input, condition: $condition) {
      id
      DatePupated
      Caterpillar {
        id
        Notes
        momID
        State
        createdAt
        updatedAt
        __typename
      }
      ReleaseDate
      ReleaseSite {
        Country
        State
        Address
        Notes
        __typename
      }
      Emerged
      Weather {
        Humidity
        Temperature
        __typename
      }
      BucketID
      Bucket {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      pupaeCheckCaterpillarId
      __typename
    }
  }
`;
export const deletePupaeCheck = /* GraphQL */ `
  mutation DeletePupaeCheck(
    $input: DeletePupaeCheckInput!
    $condition: ModelPupaeCheckConditionInput
  ) {
    deletePupaeCheck(input: $input, condition: $condition) {
      id
      DatePupated
      Caterpillar {
        id
        Notes
        momID
        State
        createdAt
        updatedAt
        __typename
      }
      ReleaseDate
      ReleaseSite {
        Country
        State
        Address
        Notes
        __typename
      }
      Emerged
      Weather {
        Humidity
        Temperature
        __typename
      }
      BucketID
      Bucket {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      pupaeCheckCaterpillarId
      __typename
    }
  }
`;
export const createPostDiapauseCheck = /* GraphQL */ `
  mutation CreatePostDiapauseCheck(
    $input: CreatePostDiapauseCheckInput!
    $condition: ModelPostDiapauseCheckConditionInput
  ) {
    createPostDiapauseCheck(input: $input, condition: $condition) {
      id
      CaterpillarID
      Weather {
        Humidity
        Temperature
        __typename
      }
      Date
      InitialLarvae
      NumLarvae
      Food
      Enclosure
      Water
      Js
      NumberPupae
      Notes
      JarID
      CaretakerID
      Jar {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      Caretaker {
        id
        Name
        Email
        Initials
        createdAt
        updatedAt
        __typename
      }
      Caterpillar {
        id
        Notes
        momID
        State
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePostDiapauseCheck = /* GraphQL */ `
  mutation UpdatePostDiapauseCheck(
    $input: UpdatePostDiapauseCheckInput!
    $condition: ModelPostDiapauseCheckConditionInput
  ) {
    updatePostDiapauseCheck(input: $input, condition: $condition) {
      id
      CaterpillarID
      Weather {
        Humidity
        Temperature
        __typename
      }
      Date
      InitialLarvae
      NumLarvae
      Food
      Enclosure
      Water
      Js
      NumberPupae
      Notes
      JarID
      CaretakerID
      Jar {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      Caretaker {
        id
        Name
        Email
        Initials
        createdAt
        updatedAt
        __typename
      }
      Caterpillar {
        id
        Notes
        momID
        State
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePostDiapauseCheck = /* GraphQL */ `
  mutation DeletePostDiapauseCheck(
    $input: DeletePostDiapauseCheckInput!
    $condition: ModelPostDiapauseCheckConditionInput
  ) {
    deletePostDiapauseCheck(input: $input, condition: $condition) {
      id
      CaterpillarID
      Weather {
        Humidity
        Temperature
        __typename
      }
      Date
      InitialLarvae
      NumLarvae
      Food
      Enclosure
      Water
      Js
      NumberPupae
      Notes
      JarID
      CaretakerID
      Jar {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      Caretaker {
        id
        Name
        Email
        Initials
        createdAt
        updatedAt
        __typename
      }
      Caterpillar {
        id
        Notes
        momID
        State
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDiapauseCheck = /* GraphQL */ `
  mutation CreateDiapauseCheck(
    $input: CreateDiapauseCheckInput!
    $condition: ModelDiapauseCheckConditionInput
  ) {
    createDiapauseCheck(input: $input, condition: $condition) {
      id
      Date
      NumLarvae
      Notes
      Weather {
        Humidity
        Temperature
        __typename
      }
      CaterpillarID
      JarID
      CaretakerID
      Caterpillar {
        id
        Notes
        momID
        State
        createdAt
        updatedAt
        __typename
      }
      Jar {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      Caretaker {
        id
        Name
        Email
        Initials
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDiapauseCheck = /* GraphQL */ `
  mutation UpdateDiapauseCheck(
    $input: UpdateDiapauseCheckInput!
    $condition: ModelDiapauseCheckConditionInput
  ) {
    updateDiapauseCheck(input: $input, condition: $condition) {
      id
      Date
      NumLarvae
      Notes
      Weather {
        Humidity
        Temperature
        __typename
      }
      CaterpillarID
      JarID
      CaretakerID
      Caterpillar {
        id
        Notes
        momID
        State
        createdAt
        updatedAt
        __typename
      }
      Jar {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      Caretaker {
        id
        Name
        Email
        Initials
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDiapauseCheck = /* GraphQL */ `
  mutation DeleteDiapauseCheck(
    $input: DeleteDiapauseCheckInput!
    $condition: ModelDiapauseCheckConditionInput
  ) {
    deleteDiapauseCheck(input: $input, condition: $condition) {
      id
      Date
      NumLarvae
      Notes
      Weather {
        Humidity
        Temperature
        __typename
      }
      CaterpillarID
      JarID
      CaretakerID
      Caterpillar {
        id
        Notes
        momID
        State
        createdAt
        updatedAt
        __typename
      }
      Jar {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      Caretaker {
        id
        Name
        Email
        Initials
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMomCheck = /* GraphQL */ `
  mutation CreateMomCheck(
    $input: CreateMomCheckInput!
    $condition: ModelMomCheckConditionInput
  ) {
    createMomCheck(input: $input, condition: $condition) {
      id
      Date
      Dev
      TimeDrinking
      TimeEating
      CottonBall
      NumLeaves
      Notes
      Weather {
        Humidity
        Temperature
        __typename
      }
      MomID
      DishID
      Mom {
        id
        NumEggs
        DateFirstHatch
        TotalHatched
        createdAt
        updatedAt
        __typename
      }
      Dish {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      Caretaker {
        id
        Name
        Email
        Initials
        createdAt
        updatedAt
        __typename
      }
      CaretakerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMomCheck = /* GraphQL */ `
  mutation UpdateMomCheck(
    $input: UpdateMomCheckInput!
    $condition: ModelMomCheckConditionInput
  ) {
    updateMomCheck(input: $input, condition: $condition) {
      id
      Date
      Dev
      TimeDrinking
      TimeEating
      CottonBall
      NumLeaves
      Notes
      Weather {
        Humidity
        Temperature
        __typename
      }
      MomID
      DishID
      Mom {
        id
        NumEggs
        DateFirstHatch
        TotalHatched
        createdAt
        updatedAt
        __typename
      }
      Dish {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      Caretaker {
        id
        Name
        Email
        Initials
        createdAt
        updatedAt
        __typename
      }
      CaretakerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMomCheck = /* GraphQL */ `
  mutation DeleteMomCheck(
    $input: DeleteMomCheckInput!
    $condition: ModelMomCheckConditionInput
  ) {
    deleteMomCheck(input: $input, condition: $condition) {
      id
      Date
      Dev
      TimeDrinking
      TimeEating
      CottonBall
      NumLeaves
      Notes
      Weather {
        Humidity
        Temperature
        __typename
      }
      MomID
      DishID
      Mom {
        id
        NumEggs
        DateFirstHatch
        TotalHatched
        createdAt
        updatedAt
        __typename
      }
      Dish {
        id
        Notes
        createdAt
        updatedAt
        __typename
      }
      Caretaker {
        id
        Name
        Email
        Initials
        createdAt
        updatedAt
        __typename
      }
      CaretakerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createMom = /* GraphQL */ `
  mutation CreateMom(
    $input: CreateMomInput!
    $condition: ModelMomConditionInput
  ) {
    createMom(input: $input, condition: $condition) {
      id
      NumEggs
      DateFirstHatch
      TotalHatched
      MomChecks {
        nextToken
        __typename
      }
      Caterpillars {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateMom = /* GraphQL */ `
  mutation UpdateMom(
    $input: UpdateMomInput!
    $condition: ModelMomConditionInput
  ) {
    updateMom(input: $input, condition: $condition) {
      id
      NumEggs
      DateFirstHatch
      TotalHatched
      MomChecks {
        nextToken
        __typename
      }
      Caterpillars {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteMom = /* GraphQL */ `
  mutation DeleteMom(
    $input: DeleteMomInput!
    $condition: ModelMomConditionInput
  ) {
    deleteMom(input: $input, condition: $condition) {
      id
      NumEggs
      DateFirstHatch
      TotalHatched
      MomChecks {
        nextToken
        __typename
      }
      Caterpillars {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createBucket = /* GraphQL */ `
  mutation CreateBucket(
    $input: CreateBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    createBucket(input: $input, condition: $condition) {
      id
      Notes
      PupaeChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateBucket = /* GraphQL */ `
  mutation UpdateBucket(
    $input: UpdateBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    updateBucket(input: $input, condition: $condition) {
      id
      Notes
      PupaeChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteBucket = /* GraphQL */ `
  mutation DeleteBucket(
    $input: DeleteBucketInput!
    $condition: ModelBucketConditionInput
  ) {
    deleteBucket(input: $input, condition: $condition) {
      id
      Notes
      PupaeChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDish = /* GraphQL */ `
  mutation CreateDish(
    $input: CreateDishInput!
    $condition: ModelDishConditionInput
  ) {
    createDish(input: $input, condition: $condition) {
      id
      Notes
      MomChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDish = /* GraphQL */ `
  mutation UpdateDish(
    $input: UpdateDishInput!
    $condition: ModelDishConditionInput
  ) {
    updateDish(input: $input, condition: $condition) {
      id
      Notes
      MomChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDish = /* GraphQL */ `
  mutation DeleteDish(
    $input: DeleteDishInput!
    $condition: ModelDishConditionInput
  ) {
    deleteDish(input: $input, condition: $condition) {
      id
      Notes
      MomChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createJar = /* GraphQL */ `
  mutation CreateJar(
    $input: CreateJarInput!
    $condition: ModelJarConditionInput
  ) {
    createJar(input: $input, condition: $condition) {
      id
      Notes
      DiapauseChecks {
        nextToken
        __typename
      }
      PostDiapauseChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateJar = /* GraphQL */ `
  mutation UpdateJar(
    $input: UpdateJarInput!
    $condition: ModelJarConditionInput
  ) {
    updateJar(input: $input, condition: $condition) {
      id
      Notes
      DiapauseChecks {
        nextToken
        __typename
      }
      PostDiapauseChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteJar = /* GraphQL */ `
  mutation DeleteJar(
    $input: DeleteJarInput!
    $condition: ModelJarConditionInput
  ) {
    deleteJar(input: $input, condition: $condition) {
      id
      Notes
      DiapauseChecks {
        nextToken
        __typename
      }
      PostDiapauseChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCaretaker = /* GraphQL */ `
  mutation CreateCaretaker(
    $input: CreateCaretakerInput!
    $condition: ModelCaretakerConditionInput
  ) {
    createCaretaker(input: $input, condition: $condition) {
      id
      Name
      Email
      Initials
      DiapauseChecks {
        nextToken
        __typename
      }
      PostDiapauseChecks {
        nextToken
        __typename
      }
      MomChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCaretaker = /* GraphQL */ `
  mutation UpdateCaretaker(
    $input: UpdateCaretakerInput!
    $condition: ModelCaretakerConditionInput
  ) {
    updateCaretaker(input: $input, condition: $condition) {
      id
      Name
      Email
      Initials
      DiapauseChecks {
        nextToken
        __typename
      }
      PostDiapauseChecks {
        nextToken
        __typename
      }
      MomChecks {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCaretaker = /* GraphQL */ `
  mutation DeleteCaretaker(
    $input: DeleteCaretakerInput!
    $condition: ModelCaretakerConditionInput
  ) {
    deleteCaretaker(input: $input, condition: $condition) {
      id
      Name
      Email
      Initials
      DiapauseChecks {
        nextToken
        __typename
      }
      PostDiapauseChecks {
        nextToken
        __typename
      }
      MomChecks {
        nextToken
        __typename
      }
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
      Notes
      momID
      State
      DiapauseChecks {
        nextToken
        __typename
      }
      PostDiapauseChecks {
        nextToken
        __typename
      }
      Mom {
        id
        NumEggs
        DateFirstHatch
        TotalHatched
        createdAt
        updatedAt
        __typename
      }
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
      Notes
      momID
      State
      DiapauseChecks {
        nextToken
        __typename
      }
      PostDiapauseChecks {
        nextToken
        __typename
      }
      Mom {
        id
        NumEggs
        DateFirstHatch
        TotalHatched
        createdAt
        updatedAt
        __typename
      }
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
      Notes
      momID
      State
      DiapauseChecks {
        nextToken
        __typename
      }
      PostDiapauseChecks {
        nextToken
        __typename
      }
      Mom {
        id
        NumEggs
        DateFirstHatch
        TotalHatched
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
