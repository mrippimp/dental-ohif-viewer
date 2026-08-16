const dentalProtocol = {
  id: 'dental',
  locked: true,
  name: 'Dental 2x2',
  createdDate: '2026-08-17T00:00:00.000Z',
  modifiedDate: '2026-08-17T00:00:00.000Z',
  availableTo: {},
  editableBy: {},
  protocolMatchingRules: [],
  toolGroupIds: ['default'],
  numberOfPriorsReferenced: 1,
  defaultViewport: {
    viewportOptions: {
      viewportType: 'stack',
      toolGroupId: 'default',
      allowUnmatchedView: true,
    },
    displaySets: [{ id: 'currentDisplaySetId', matchedDisplaySetsIndex: -1 }],
  },
  displaySetSelectors: {
    currentDisplaySetId: {
      seriesMatchingRules: [
        {
          weight: 10,
          attribute: 'numImageFrames',
          constraint: { greaterThan: { value: 0 } },
        },
      ],
    },
    priorDisplaySetId: {
      studyMatchingRules: [
        {
          attribute: 'studyInstanceUIDsIndex',
          from: 'options',
          required: false,
        },
      ],
      seriesMatchingRules: [
        {
          weight: 10,
          attribute: 'numImageFrames',
          constraint: { greaterThan: { value: 0 } },
        },
        {
          // same modality as the current display set
          weight: 5,
          attribute: 'Modality',
          constraint: { equals: { attribute: 'Modality', vsAttribute: 'currentDisplaySetId' } },
        },
      ],
    },
  },
  stages: [
    {
      name: 'dentalStage',
      viewportStructure: {
        layoutType: 'grid',
        properties: { rows: 2, columns: 2 },
      },
      viewports: [
        {
          // top-left: current image
          viewportOptions: {
            viewportType: 'stack',
            viewportId: 'dentalCurrent',
            toolGroupId: 'default',
          },
          displaySets: [{ id: 'currentDisplaySetId' }],
        },
        {
          // top-right: prior exam, same modality
          viewportOptions: {
            viewportType: 'stack',
            viewportId: 'dentalPrior',
            toolGroupId: 'default',
            allowUnmatchedView: true,
          },
          displaySets: [{ id: 'priorDisplaySetId', options: { matchedDisplaySetsIndex: 0 } }],
        },
        {
          // bottom-left: bitewing placeholder
          viewportOptions: {
            viewportType: 'stack',
            viewportId: 'bitewing1',
            toolGroupId: 'default',
            allowUnmatchedView: true,
          },
          displaySets: [],
        },
        {
          // bottom-right: bitewing placeholder
          viewportOptions: {
            viewportType: 'stack',
            viewportId: 'bitewing2',
            toolGroupId: 'default',
            allowUnmatchedView: true,
          },
          displaySets: [],
        },
      ],
      createdDate: '2026-08-17T00:00:00.000Z',
    },
  ],
};

export default dentalProtocol;
