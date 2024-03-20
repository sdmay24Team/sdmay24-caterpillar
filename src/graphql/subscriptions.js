/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePupaeCheck = /* GraphQL */ `
  subscription OnCreatePupaeCheck(
    $filter: ModelSubscriptionPupaeCheckFilterInput
  ) {
    onCreatePupaeCheck(filter: $filter) {
      id
      DatePupated
      Caterpillar {
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
        CreatedBy
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
        PupaeChecks {
          nextToken
          __typename
        }
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
export const onUpdatePupaeCheck = /* GraphQL */ `
  subscription OnUpdatePupaeCheck(
    $filter: ModelSubscriptionPupaeCheckFilterInput
  ) {
    onUpdatePupaeCheck(filter: $filter) {
      id
      DatePupated
      Caterpillar {
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
        CreatedBy
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
        PupaeChecks {
          nextToken
          __typename
        }
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
export const onDeletePupaeCheck = /* GraphQL */ `
  subscription OnDeletePupaeCheck(
    $filter: ModelSubscriptionPupaeCheckFilterInput
  ) {
    onDeletePupaeCheck(filter: $filter) {
      id
      DatePupated
      Caterpillar {
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
        CreatedBy
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
        PupaeChecks {
          nextToken
          __typename
        }
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
export const onCreatePostDiapauseCheck = /* GraphQL */ `
  subscription OnCreatePostDiapauseCheck(
    $filter: ModelSubscriptionPostDiapauseCheckFilterInput
  ) {
    onCreatePostDiapauseCheck(filter: $filter) {
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
      Caretaker {
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
      Caterpillar {
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
        CreatedBy
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
export const onUpdatePostDiapauseCheck = /* GraphQL */ `
  subscription OnUpdatePostDiapauseCheck(
    $filter: ModelSubscriptionPostDiapauseCheckFilterInput
  ) {
    onUpdatePostDiapauseCheck(filter: $filter) {
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
      Caretaker {
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
      Caterpillar {
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
        CreatedBy
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
export const onDeletePostDiapauseCheck = /* GraphQL */ `
  subscription OnDeletePostDiapauseCheck(
    $filter: ModelSubscriptionPostDiapauseCheckFilterInput
  ) {
    onDeletePostDiapauseCheck(filter: $filter) {
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
      Caretaker {
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
      Caterpillar {
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
        CreatedBy
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
export const onCreateDiapauseCheck = /* GraphQL */ `
  subscription OnCreateDiapauseCheck(
    $filter: ModelSubscriptionDiapauseCheckFilterInput
  ) {
    onCreateDiapauseCheck(filter: $filter) {
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
        CreatedBy
        createdAt
        updatedAt
        __typename
      }
      Jar {
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
      Caretaker {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDiapauseCheck = /* GraphQL */ `
  subscription OnUpdateDiapauseCheck(
    $filter: ModelSubscriptionDiapauseCheckFilterInput
  ) {
    onUpdateDiapauseCheck(filter: $filter) {
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
        CreatedBy
        createdAt
        updatedAt
        __typename
      }
      Jar {
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
      Caretaker {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDiapauseCheck = /* GraphQL */ `
  subscription OnDeleteDiapauseCheck(
    $filter: ModelSubscriptionDiapauseCheckFilterInput
  ) {
    onDeleteDiapauseCheck(filter: $filter) {
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
        CreatedBy
        createdAt
        updatedAt
        __typename
      }
      Jar {
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
      Caretaker {
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMomCheck = /* GraphQL */ `
  subscription OnCreateMomCheck($filter: ModelSubscriptionMomCheckFilterInput) {
    onCreateMomCheck(filter: $filter) {
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
      Dish {
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
      Caretaker {
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
      CaretakerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMomCheck = /* GraphQL */ `
  subscription OnUpdateMomCheck($filter: ModelSubscriptionMomCheckFilterInput) {
    onUpdateMomCheck(filter: $filter) {
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
      Dish {
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
      Caretaker {
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
      CaretakerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMomCheck = /* GraphQL */ `
  subscription OnDeleteMomCheck($filter: ModelSubscriptionMomCheckFilterInput) {
    onDeleteMomCheck(filter: $filter) {
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
      Dish {
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
      Caretaker {
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
      CaretakerID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMom = /* GraphQL */ `
  subscription OnCreateMom($filter: ModelSubscriptionMomFilterInput) {
    onCreateMom(filter: $filter) {
      id
      NumEggs
      DateFirstHatch
      TotalHatched
      MomChecks {
        items {
          id
          Date
          Dev
          TimeDrinking
          TimeEating
          CottonBall
          NumLeaves
          Notes
          MomID
          DishID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Caterpillars {
        items {
          id
          Notes
          momID
          State
          CreatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMom = /* GraphQL */ `
  subscription OnUpdateMom($filter: ModelSubscriptionMomFilterInput) {
    onUpdateMom(filter: $filter) {
      id
      NumEggs
      DateFirstHatch
      TotalHatched
      MomChecks {
        items {
          id
          Date
          Dev
          TimeDrinking
          TimeEating
          CottonBall
          NumLeaves
          Notes
          MomID
          DishID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Caterpillars {
        items {
          id
          Notes
          momID
          State
          CreatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMom = /* GraphQL */ `
  subscription OnDeleteMom($filter: ModelSubscriptionMomFilterInput) {
    onDeleteMom(filter: $filter) {
      id
      NumEggs
      DateFirstHatch
      TotalHatched
      MomChecks {
        items {
          id
          Date
          Dev
          TimeDrinking
          TimeEating
          CottonBall
          NumLeaves
          Notes
          MomID
          DishID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Caterpillars {
        items {
          id
          Notes
          momID
          State
          CreatedBy
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateBucket = /* GraphQL */ `
  subscription OnCreateBucket($filter: ModelSubscriptionBucketFilterInput) {
    onCreateBucket(filter: $filter) {
      id
      Notes
      PupaeChecks {
        items {
          id
          DatePupated
          ReleaseDate
          Emerged
          BucketID
          createdAt
          updatedAt
          pupaeCheckCaterpillarId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateBucket = /* GraphQL */ `
  subscription OnUpdateBucket($filter: ModelSubscriptionBucketFilterInput) {
    onUpdateBucket(filter: $filter) {
      id
      Notes
      PupaeChecks {
        items {
          id
          DatePupated
          ReleaseDate
          Emerged
          BucketID
          createdAt
          updatedAt
          pupaeCheckCaterpillarId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteBucket = /* GraphQL */ `
  subscription OnDeleteBucket($filter: ModelSubscriptionBucketFilterInput) {
    onDeleteBucket(filter: $filter) {
      id
      Notes
      PupaeChecks {
        items {
          id
          DatePupated
          ReleaseDate
          Emerged
          BucketID
          createdAt
          updatedAt
          pupaeCheckCaterpillarId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish($filter: ModelSubscriptionDishFilterInput) {
    onCreateDish(filter: $filter) {
      id
      Notes
      MomChecks {
        items {
          id
          Date
          Dev
          TimeDrinking
          TimeEating
          CottonBall
          NumLeaves
          Notes
          MomID
          DishID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish($filter: ModelSubscriptionDishFilterInput) {
    onUpdateDish(filter: $filter) {
      id
      Notes
      MomChecks {
        items {
          id
          Date
          Dev
          TimeDrinking
          TimeEating
          CottonBall
          NumLeaves
          Notes
          MomID
          DishID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish($filter: ModelSubscriptionDishFilterInput) {
    onDeleteDish(filter: $filter) {
      id
      Notes
      MomChecks {
        items {
          id
          Date
          Dev
          TimeDrinking
          TimeEating
          CottonBall
          NumLeaves
          Notes
          MomID
          DishID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateJar = /* GraphQL */ `
  subscription OnCreateJar($filter: ModelSubscriptionJarFilterInput) {
    onCreateJar(filter: $filter) {
      id
      Notes
      DiapauseChecks {
        items {
          id
          Date
          NumLarvae
          Notes
          CaterpillarID
          JarID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostDiapauseChecks {
        items {
          id
          CaterpillarID
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateJar = /* GraphQL */ `
  subscription OnUpdateJar($filter: ModelSubscriptionJarFilterInput) {
    onUpdateJar(filter: $filter) {
      id
      Notes
      DiapauseChecks {
        items {
          id
          Date
          NumLarvae
          Notes
          CaterpillarID
          JarID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostDiapauseChecks {
        items {
          id
          CaterpillarID
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteJar = /* GraphQL */ `
  subscription OnDeleteJar($filter: ModelSubscriptionJarFilterInput) {
    onDeleteJar(filter: $filter) {
      id
      Notes
      DiapauseChecks {
        items {
          id
          Date
          NumLarvae
          Notes
          CaterpillarID
          JarID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostDiapauseChecks {
        items {
          id
          CaterpillarID
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateCaretaker = /* GraphQL */ `
  subscription OnCreateCaretaker(
    $filter: ModelSubscriptionCaretakerFilterInput
  ) {
    onCreateCaretaker(filter: $filter) {
      id
      Name
      Email
      Initials
      DiapauseChecks {
        items {
          id
          Date
          NumLarvae
          Notes
          CaterpillarID
          JarID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostDiapauseChecks {
        items {
          id
          CaterpillarID
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      MomChecks {
        items {
          id
          Date
          Dev
          TimeDrinking
          TimeEating
          CottonBall
          NumLeaves
          Notes
          MomID
          DishID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCaretaker = /* GraphQL */ `
  subscription OnUpdateCaretaker(
    $filter: ModelSubscriptionCaretakerFilterInput
  ) {
    onUpdateCaretaker(filter: $filter) {
      id
      Name
      Email
      Initials
      DiapauseChecks {
        items {
          id
          Date
          NumLarvae
          Notes
          CaterpillarID
          JarID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostDiapauseChecks {
        items {
          id
          CaterpillarID
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      MomChecks {
        items {
          id
          Date
          Dev
          TimeDrinking
          TimeEating
          CottonBall
          NumLeaves
          Notes
          MomID
          DishID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCaretaker = /* GraphQL */ `
  subscription OnDeleteCaretaker(
    $filter: ModelSubscriptionCaretakerFilterInput
  ) {
    onDeleteCaretaker(filter: $filter) {
      id
      Name
      Email
      Initials
      DiapauseChecks {
        items {
          id
          Date
          NumLarvae
          Notes
          CaterpillarID
          JarID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostDiapauseChecks {
        items {
          id
          CaterpillarID
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      MomChecks {
        items {
          id
          Date
          Dev
          TimeDrinking
          TimeEating
          CottonBall
          NumLeaves
          Notes
          MomID
          DishID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
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
      Notes
      momID
      State
      DiapauseChecks {
        items {
          id
          Date
          NumLarvae
          Notes
          CaterpillarID
          JarID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostDiapauseChecks {
        items {
          id
          CaterpillarID
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Mom {
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
      CreatedBy
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
      Notes
      momID
      State
      DiapauseChecks {
        items {
          id
          Date
          NumLarvae
          Notes
          CaterpillarID
          JarID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostDiapauseChecks {
        items {
          id
          CaterpillarID
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Mom {
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
      CreatedBy
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
      Notes
      momID
      State
      DiapauseChecks {
        items {
          id
          Date
          NumLarvae
          Notes
          CaterpillarID
          JarID
          CaretakerID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      PostDiapauseChecks {
        items {
          id
          CaterpillarID
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
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Mom {
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
      CreatedBy
      createdAt
      updatedAt
      __typename
    }
  }
`;
