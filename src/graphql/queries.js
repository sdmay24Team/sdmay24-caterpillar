/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPupaeCheck = /* GraphQL */ `
  query GetPupaeCheck($id: ID!) {
    getPupaeCheck(id: $id) {
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
export const listPupaeChecks = /* GraphQL */ `
  query ListPupaeChecks(
    $filter: ModelPupaeCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPupaeChecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        DatePupated
        Caterpillar {
          id
          Notes
          momID
          State
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
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        pupaeCheckCaterpillarId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const pupaeChecksByBucketID = /* GraphQL */ `
  query PupaeChecksByBucketID(
    $BucketID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPupaeCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pupaeChecksByBucketID(
      BucketID: $BucketID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        DatePupated
        Caterpillar {
          id
          Notes
          momID
          State
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
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        pupaeCheckCaterpillarId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPostDiapauseCheck = /* GraphQL */ `
  query GetPostDiapauseCheck($id: ID!) {
    getPostDiapauseCheck(id: $id) {
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
export const listPostDiapauseChecks = /* GraphQL */ `
  query ListPostDiapauseChecks(
    $filter: ModelPostDiapauseCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostDiapauseChecks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          CreatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postDiapauseChecksByCaterpillarID = /* GraphQL */ `
  query PostDiapauseChecksByCaterpillarID(
    $CaterpillarID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostDiapauseCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postDiapauseChecksByCaterpillarID(
      CaterpillarID: $CaterpillarID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          CreatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postDiapauseChecksByJarID = /* GraphQL */ `
  query PostDiapauseChecksByJarID(
    $JarID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostDiapauseCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postDiapauseChecksByJarID(
      JarID: $JarID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          CreatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postDiapauseChecksByCaretakerID = /* GraphQL */ `
  query PostDiapauseChecksByCaretakerID(
    $CaretakerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostDiapauseCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postDiapauseChecksByCaretakerID(
      CaretakerID: $CaretakerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          CreatedBy
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDiapauseCheck = /* GraphQL */ `
  query GetDiapauseCheck($id: ID!) {
    getDiapauseCheck(id: $id) {
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
export const listDiapauseChecks = /* GraphQL */ `
  query ListDiapauseChecks(
    $filter: ModelDiapauseCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiapauseChecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          CreatedBy
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
      nextToken
      __typename
    }
  }
`;
export const diapauseChecksByCaterpillarID = /* GraphQL */ `
  query DiapauseChecksByCaterpillarID(
    $CaterpillarID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiapauseCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    diapauseChecksByCaterpillarID(
      CaterpillarID: $CaterpillarID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          CreatedBy
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
      nextToken
      __typename
    }
  }
`;
export const diapauseChecksByJarID = /* GraphQL */ `
  query DiapauseChecksByJarID(
    $JarID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiapauseCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    diapauseChecksByJarID(
      JarID: $JarID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          CreatedBy
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
      nextToken
      __typename
    }
  }
`;
export const diapauseChecksByCaretakerID = /* GraphQL */ `
  query DiapauseChecksByCaretakerID(
    $CaretakerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDiapauseCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    diapauseChecksByCaretakerID(
      CaretakerID: $CaretakerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          CreatedBy
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
      nextToken
      __typename
    }
  }
`;
export const getMomCheck = /* GraphQL */ `
  query GetMomCheck($id: ID!) {
    getMomCheck(id: $id) {
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
export const listMomChecks = /* GraphQL */ `
  query ListMomChecks(
    $filter: ModelMomCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMomChecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const momChecksByMomID = /* GraphQL */ `
  query MomChecksByMomID(
    $MomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMomCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    momChecksByMomID(
      MomID: $MomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const momChecksByDishID = /* GraphQL */ `
  query MomChecksByDishID(
    $DishID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMomCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    momChecksByDishID(
      DishID: $DishID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const momChecksByCaretakerID = /* GraphQL */ `
  query MomChecksByCaretakerID(
    $CaretakerID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMomCheckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    momChecksByCaretakerID(
      CaretakerID: $CaretakerID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMom = /* GraphQL */ `
  query GetMom($id: ID!) {
    getMom(id: $id) {
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
export const listMoms = /* GraphQL */ `
  query ListMoms(
    $filter: ModelMomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMoms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBucket = /* GraphQL */ `
  query GetBucket($id: ID!) {
    getBucket(id: $id) {
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
export const listBuckets = /* GraphQL */ `
  query ListBuckets(
    $filter: ModelBucketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBuckets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getDish = /* GraphQL */ `
  query GetDish($id: ID!) {
    getDish(id: $id) {
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
export const listDishes = /* GraphQL */ `
  query ListDishes(
    $filter: ModelDishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDishes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getJar = /* GraphQL */ `
  query GetJar($id: ID!) {
    getJar(id: $id) {
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
export const listJars = /* GraphQL */ `
  query ListJars(
    $filter: ModelJarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCaretaker = /* GraphQL */ `
  query GetCaretaker($id: ID!) {
    getCaretaker(id: $id) {
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
export const listCaretakers = /* GraphQL */ `
  query ListCaretakers(
    $filter: ModelCaretakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaretakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCaterpillar = /* GraphQL */ `
  query GetCaterpillar($id: ID!) {
    getCaterpillar(id: $id) {
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
export const listCaterpillars = /* GraphQL */ `
  query ListCaterpillars(
    $filter: ModelCaterpillarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCaterpillars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const caterpillarsByMomID = /* GraphQL */ `
  query CaterpillarsByMomID(
    $momID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCaterpillarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    caterpillarsByMomID(
      momID: $momID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
