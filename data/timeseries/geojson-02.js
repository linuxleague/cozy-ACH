const startDate = '2021-12-07T16:21:49+01:00'
const endDate = '2021-12-07T17:08:28.026731+01:00'
const time1 = '2021-12-07T16:24:49+01:00'
const time2 = '2021-12-07T17:06:26+01:00'
const time3 = '2021-12-07T17:08:28.026731+01:00'
const time4 = '2021-12-07T16:39:16+01:00'
const time5 = '2021-12-07T16:39:31+01:00'
const time6 = '2021-12-07T17:04:07+01:00'
const time7 = '2021-12-07T17:04:34+01:00'
const geoJson02Dates = {
  startDate,
  endDate,
  time1,
  time2,
  time3,
  time4,
  time5,
  time6,
  time7
}

const getGeojson02 = (dates = geoJson02Dates) => {
  return {
    source: 'agremob.com',
    startDate: dates.startDate,
    endDate: dates.endDate,
    series: [
      {
        features: [
          {
            geometry: {
              coordinates: [2.31251, 48.7799432],
              type: 'Point'
            },
            id: '61aff9b0f3a4a081f777f4f5',
            properties: {
              display_name: 'Rue des Blagis, Bourg-la-Reine',
              duration: 180,
              ending_trip: {
                $oid: '61aff9acf3a4a081f777f378'
              },
              enter_fmt_time: dates.startDate,
              enter_local_dt: {
                day: 7,
                hour: 16,
                minute: 21,
                month: 12,
                second: 49,
                timezone: 'Europe/Paris',
                weekday: 1,
                year: 2021
              },
              enter_ts: 1638890509,
              exit_fmt_time: dates.time1,
              exit_local_dt: {
                day: 7,
                hour: 16,
                minute: 24,
                month: 12,
                second: 49,
                timezone: 'Europe/Paris',
                weekday: 1,
                year: 2021
              },
              exit_ts: 1638890689,
              feature_type: 'start_place',
              raw_places: [
                {
                  $oid: '61aff97cf3a4a081f777f34a'
                },
                {
                  $oid: '61aff97cf3a4a081f777f34a'
                }
              ],
              source: 'DwellSegmentationTimeFilter',
              starting_trip: {
                $oid: '61aff9adf3a4a081f777f39c'
              }
            },
            type: 'Feature'
          },
          {
            geometry: {
              coordinates: [2.2700177, 48.8393046],
              type: 'Point'
            },
            id: '61aff9b1f3a4a081f777f4f6',
            properties: {
              display_name: 'Quai André Citroën, Paris',
              duration: 122.02673101425171,
              ending_trip: {
                $oid: '61aff9adf3a4a081f777f39c'
              },
              enter_fmt_time: dates.time2,
              enter_local_dt: {
                day: 7,
                hour: 17,
                minute: 6,
                month: 12,
                second: 26,
                timezone: 'Europe/Paris',
                weekday: 1,
                year: 2021
              },
              enter_ts: 1638893186,
              exit_fmt_time: dates.time3,
              exit_local_dt: {
                day: 7,
                hour: 17,
                minute: 8,
                month: 12,
                second: 28,
                timezone: 'Europe/Paris',
                weekday: 1,
                year: 2021
              },
              exit_ts: 1638893308.026731,
              feature_type: 'end_place',
              raw_places: [
                {
                  $oid: '61aff9aaf3a4a081f777f34c'
                },
                {
                  $oid: '61aff9aaf3a4a081f777f34c'
                }
              ],
              source: 'DwellSegmentationTimeFilter',
              starting_trip: {
                $oid: '61aff9adf3a4a081f777f3f9'
              }
            },
            type: 'Feature'
          },
          {
            geometry: {
              coordinates: [[2.3384146, 48.820499], [2.3383294, 48.8205031]],
              type: 'LineString'
            },
            id: '61aff9adf3a4a081f777f3f7',
            properties: {
              distance: 6.254384354213406,
              duration: 15,
              ending_section: {
                $oid: '61aff9adf3a4a081f777f39e'
              },
              enter_fmt_time: dates.time4,
              enter_loc: {
                coordinates: [2.3384146, 48.820499],
                type: 'Point'
              },
              enter_local_dt: {
                day: 7,
                hour: 16,
                minute: 39,
                month: 12,
                second: 16,
                timezone: 'Europe/Paris',
                weekday: 1,
                year: 2021
              },
              enter_ts: 1638891556,
              exit_fmt_time: dates.time5,
              exit_loc: {
                coordinates: [2.3383294, 48.8205031],
                type: 'Point'
              },
              exit_local_dt: {
                day: 7,
                hour: 16,
                minute: 39,
                month: 12,
                second: 31,
                timezone: 'Europe/Paris',
                weekday: 1,
                year: 2021
              },
              exit_ts: 1638891571,
              feature_type: 'stop',
              source: 'SmoothedHighConfidenceMotion',
              starting_section: {
                $oid: '61aff9adf3a4a081f777f3bd'
              },
              trip_id: {
                $oid: '61aff9adf3a4a081f777f39c'
              }
            },
            type: 'Feature'
          },
          {
            geometry: {
              coordinates: [[2.2707612, 48.8384364], [2.2705187, 48.8385616]],
              type: 'LineString'
            },
            id: '61aff9adf3a4a081f777f3f8',
            properties: {
              distance: 22.556474113538865,
              duration: 27,
              ending_section: {
                $oid: '61aff9adf3a4a081f777f3bd'
              },
              enter_fmt_time: dates.time6,
              enter_loc: {
                coordinates: [2.2707612, 48.8384364],
                type: 'Point'
              },
              enter_local_dt: {
                day: 7,
                hour: 17,
                minute: 4,
                month: 12,
                second: 7,
                timezone: 'Europe/Paris',
                weekday: 1,
                year: 2021
              },
              enter_ts: 1638893047,
              exit_fmt_time: dates.time7,
              exit_loc: {
                coordinates: [2.2705187, 48.8385616],
                type: 'Point'
              },
              exit_local_dt: {
                day: 7,
                hour: 17,
                minute: 4,
                month: 12,
                second: 34,
                timezone: 'Europe/Paris',
                weekday: 1,
                year: 2021
              },
              exit_ts: 1638893074,
              feature_type: 'stop',
              source: 'SmoothedHighConfidenceMotion',
              starting_section: {
                $oid: '61aff9adf3a4a081f777f3f1'
              },
              trip_id: {
                $oid: '61aff9adf3a4a081f777f39c'
              }
            },
            type: 'Feature'
          },
          {
            features: [
              {
                geometry: {
                  coordinates: [
                    [2.31251, 48.7799432],
                    [2.313591181324194, 48.78161416932299],
                    [2.314672362648388, 48.783285138645994],
                    [2.315753543972582, 48.78495610796899],
                    [2.316834725296776, 48.78662707729199],
                    [2.31791590662097, 48.78829804661498],
                    [2.318997087945164, 48.78996901593798],
                    [2.320078269269358, 48.79163998526098],
                    [2.3211594505935524, 48.79331095458397],
                    [2.3222406319177464, 48.79498192390697],
                    [2.3233218132419404, 48.79665289322997],
                    [2.3244029945661344, 48.79832386255296],
                    [2.3254841758903284, 48.79999483187596],
                    [2.3265653572145224, 48.80166580119896],
                    [2.3276465385387164, 48.80333677052195],
                    [2.3287277198629104, 48.80500773984495],
                    [2.3298089011871044, 48.80667870916795],
                    [2.3308900825112984, 48.80834967849094],
                    [2.3319712638354924, 48.81002064781394],
                    [2.3330524451596863, 48.81169161713694],
                    [2.3341336264838803, 48.81336258645994],
                    [2.3352148078080743, 48.81503355578293],
                    [2.3362959891322683, 48.816704525105926],
                    [2.3373771704564628, 48.81837549442893],
                    [2.3384583517806568, 48.82004646375192],
                    [2.3390860568658383, 48.82091794668816],
                    [2.3390284068965514, 48.82086480344828],
                    [2.33908099563318, 48.82056642664008],
                    [2.338949610913621, 48.820388832994844],
                    [2.3384146, 48.820499]
                  ],
                  type: 'LineString'
                },
                id: '61aff9adf3a4a081f777f39e',
                properties: {
                  distance: 5058.309344424814,
                  distances: [
                    0,
                    201.98652472578271,
                    201.98549037826737,
                    201.98445603201395,
                    201.98342168993324,
                    201.98238734912147,
                    201.98135301176274,
                    201.98031867786057,
                    201.97928434525082,
                    201.97825001607922,
                    201.97721569038765,
                    201.97618136598643,
                    201.9751470457864,
                    201.97411272688382,
                    201.9730784114628,
                    201.9720440995268,
                    201.97100978889893,
                    201.9699754817632,
                    201.96894117812334,
                    201.9679068758022,
                    201.96687257771083,
                    201.96583828094532,
                    201.9648039876899,
                    201.96376969796074,
                    201.9627354095427,
                    107.2494708417713,
                    7.261789823734588,
                    33.40063754114277,
                    21.96567301940056,
                    41.04065435422053
                  ],
                  duration: 867,
                  end_fmt_time: dates.time4,
                  end_local_dt: {
                    day: 7,
                    hour: 16,
                    minute: 39,
                    month: 12,
                    second: 16,
                    timezone: 'Europe/Paris',
                    weekday: 1,
                    year: 2021
                  },
                  end_stop: {
                    $oid: '61aff9adf3a4a081f777f3f7'
                  },
                  end_ts: 1638891556,
                  feature_type: 'section',
                  sensed_mode: 'PredictedModeTypes.TRAIN',
                  source: 'SmoothedHighConfidenceMotion',
                  speeds: [
                    0,
                    6.73288415752609,
                    6.732849679275579,
                    6.732815201067131,
                    6.7327807229977745,
                    6.732746244970715,
                    6.732711767058758,
                    6.732677289262019,
                    6.73264281150836,
                    6.732608333869307,
                    6.732573856346255,
                    6.732539378866215,
                    6.732504901526213,
                    6.732470424229461,
                    6.73243594704876,
                    6.732401469984227,
                    6.732366992963297,
                    6.732332516058774,
                    6.732298039270778,
                    6.73226356252674,
                    6.732229085923694,
                    6.732194609364844,
                    6.7321601329229965,
                    6.732125656598692,
                    6.73209118031809,
                    3.574982361392377,
                    0.24205966079115296,
                    1.113354584704759,
                    0.7321891006466853,
                    1.520024235341501
                  ],
                  start_fmt_time: dates.time1,
                  start_local_dt: {
                    day: 7,
                    hour: 16,
                    minute: 24,
                    month: 12,
                    second: 49,
                    timezone: 'Europe/Paris',
                    weekday: 1,
                    year: 2021
                  },
                  start_ts: 1638890689,
                  times: [
                    1638890689,
                    1638890719,
                    1638890749,
                    1638890779,
                    1638890809,
                    1638890839,
                    1638890869,
                    1638890899,
                    1638890929,
                    1638890959,
                    1638890989,
                    1638891019,
                    1638891049,
                    1638891079,
                    1638891109,
                    1638891139,
                    1638891169,
                    1638891199,
                    1638891229,
                    1638891259,
                    1638891289,
                    1638891319,
                    1638891349,
                    1638891379,
                    1638891409,
                    1638891439,
                    1638891469,
                    1638891499,
                    1638891529,
                    1638891556
                  ],
                  timestamps: [
                    1638890689000,
                    1638890719000,
                    1638890749000,
                    1638890779000,
                    1638890809000,
                    1638890839000,
                    1638890869000,
                    1638890899000,
                    1638890929000,
                    1638890959000,
                    1638890989000,
                    1638891019000,
                    1638891049000,
                    1638891079000,
                    1638891109000,
                    1638891139000,
                    1638891169000,
                    1638891199000,
                    1638891229000,
                    1638891259000,
                    1638891289000,
                    1638891319000,
                    1638891349000,
                    1638891379000,
                    1638891409000,
                    1638891439000,
                    1638891469000,
                    1638891499000,
                    1638891529000,
                    1638891556000
                  ],
                  trip_id: {
                    $oid: '61aff9adf3a4a081f777f39c'
                  }
                },
                type: 'Feature'
              }
            ],
            type: 'FeatureCollection'
          },
          {
            features: [
              {
                geometry: {
                  coordinates: [
                    [2.3383294, 48.8205031],
                    [2.3382979666742587, 48.82050659306222],
                    [2.3382678, 48.8205557],
                    [2.338271778125, 48.820533559375],
                    [2.338253121875, 48.820535340625],
                    [2.3364777, 48.82089385526316],
                    [2.3348535334260596, 48.821231189490405],
                    [2.3333201526061442, 48.821554174476695],
                    [2.3317867717862293, 48.821877159462986],
                    [2.330253390966314, 48.82220014444927],
                    [2.3287200101463985, 48.82252312943556],
                    [2.3271866293264836, 48.82284611442185],
                    [2.325653248506568, 48.82316909940814],
                    [2.3241198676866532, 48.82349208439443],
                    [2.322586486866738, 48.82381506938072],
                    [2.321053106046823, 48.82413805436701],
                    [2.3195197252269075, 48.8244610393533],
                    [2.3191531659998916, 48.824606961471],
                    [2.316587024536455, 48.82516775111323],
                    [2.3140359044889696, 48.8257982863403],
                    [2.313326951648366, 48.8259047842491],
                    [2.3131507357142858, 48.82594747142858],
                    [2.3106931838709674, 48.82643748064516],
                    [2.3075967533333333, 48.82703299333333],
                    [2.3066343, 48.827333951724135],
                    [2.3065177666666665, 48.82737853333333],
                    [2.3045146129032257, 48.827859358064515],
                    [2.3018305344827583, 48.82845944482759],
                    [2.3006965, 48.82860316666667],
                    [2.2988199333333332, 48.829115800000004],
                    [2.2961612000000002, 48.82980216666667],
                    [2.2951158333333335, 48.83000633333333],
                    [2.2935271999999998, 48.83066215],
                    [2.2904844285714288, 48.83168377857143],
                    [2.2886042333333334, 48.83249633333333],
                    [2.288372577758713, 48.8328073846244],
                    [2.2867303466666664, 48.833371199999995],
                    [2.284358951763557, 48.83411569339847],
                    [2.2835491645376513, 48.834199013342634],
                    [2.2816250333333334, 48.83511706666667],
                    [2.278957033333333, 48.83592556666667],
                    [2.2777175, 48.83620722903226],
                    [2.2769733000000003, 48.83640942],
                    [2.27498614, 48.83712276],
                    [2.27406012, 48.83714248],
                    [2.2730487399999997, 48.8374766],
                    [2.27252058, 48.8377257],
                    [2.271653759684934, 48.83789375217355],
                    [2.270994174258949, 48.838138610048794],
                    [2.270781931034483, 48.838385917241375],
                    [2.2707612, 48.8384364]
                  ],
                  type: 'LineString'
                },
                id: '61aff9adf3a4a081f777f3bd',
                properties: {
                  distance: 5389.71931388674,
                  distances: [
                    0,
                    2.3338746642432437,
                    5.89018714479141,
                    2.479093021254362,
                    1.3801649008334573,
                    135.95917960170348,
                    124.6847239919974,
                    117.86626381955158,
                    117.86557479316173,
                    117.86488576360759,
                    117.86419673151853,
                    117.8635076961724,
                    117.86281865790279,
                    117.86212961658597,
                    117.86144057234574,
                    117.86075152505836,
                    117.8600624748477,
                    31.358884070086955,
                    197.93732005947305,
                    199.48369830349438,
                    53.23289544520967,
                    13.745456085781615,
                    187.97428373350098,
                    236.14495555769156,
                    77.99853989747598,
                    9.866368011792762,
                    156.07902866277556,
                    207.50079840352817,
                    84.53705127015438,
                    148.72359905395095,
                    209.04874502453777,
                    79.81674740675113,
                    137.25966272497342,
                    250.02090020450004,
                    164.63150960516148,
                    38.520019197237175,
                    135.5695044742305,
                    192.30203666180728,
                    59.99051331414522,
                    173.9380675648276,
                    214.9744785863769,
                    95.97573882565607,
                    58.925562285938234,
                    165.66244026098718,
                    67.80965267526591,
                    82.82185392537973,
                    47.5544188627261,
                    66.13542859676373,
                    55.42221981694947,
                    31.583222532119397,
                    5.814857809914868
                  ],
                  duration: 1476,
                  end_fmt_time: dates.time6,
                  end_local_dt: {
                    day: 7,
                    hour: 17,
                    minute: 4,
                    month: 12,
                    second: 7,
                    timezone: 'Europe/Paris',
                    weekday: 1,
                    year: 2021
                  },
                  end_stop: {
                    $oid: '61aff9adf3a4a081f777f3f8'
                  },
                  end_ts: 1638893047,
                  feature_type: 'section',
                  sensed_mode: 'PredictedModeTypes.BUS',
                  source: 'SmoothedHighConfidenceMotion',
                  speeds: [
                    0,
                    0.07779582214144146,
                    0.196339571493047,
                    0.08263643404181206,
                    0.046005496694448575,
                    4.531972653390116,
                    4.156157466399914,
                    3.928875460651719,
                    3.9288524931053908,
                    3.9288295254535863,
                    3.9288065577172846,
                    3.9287835898724137,
                    3.9287606219300932,
                    3.9287376538861993,
                    3.928714685744858,
                    3.9286917175019456,
                    3.9286687491615897,
                    1.0452961356695651,
                    6.597910668649102,
                    6.649456610116479,
                    1.7744298481736558,
                    0.45818186952605383,
                    6.265809457783366,
                    7.871498518589719,
                    2.599951329915866,
                    0.3288789337264254,
                    5.202634288759185,
                    6.916693280117605,
                    2.817901709005146,
                    4.957453301798365,
                    6.968291500817926,
                    2.6605582468917044,
                    4.575322090832447,
                    8.334030006816668,
                    5.487716986838716,
                    1.2840006399079058,
                    4.518983482474351,
                    6.41006788872691,
                    1.999683777138174,
                    5.797935585494254,
                    7.16581595287923,
                    3.1991912941885357,
                    1.9641854095312745,
                    5.522081342032906,
                    2.260321755842197,
                    2.760728464179324,
                    1.5851472954242034,
                    2.204514286558791,
                    1.8474073272316491,
                    1.05277408440398,
                    0.9691429683191446
                  ],
                  start_fmt_time: dates.time5,
                  start_local_dt: {
                    day: 7,
                    hour: 16,
                    minute: 39,
                    month: 12,
                    second: 31,
                    timezone: 'Europe/Paris',
                    weekday: 1,
                    year: 2021
                  },
                  start_stop: {
                    $oid: '61aff9adf3a4a081f777f3f7'
                  },
                  start_ts: 1638891571,
                  times: [
                    1638891571,
                    1638891601,
                    1638891631,
                    1638891661,
                    1638891691,
                    1638891721,
                    1638891751,
                    1638891781,
                    1638891811,
                    1638891841,
                    1638891871,
                    1638891901,
                    1638891931,
                    1638891961,
                    1638891991,
                    1638892021,
                    1638892051,
                    1638892081,
                    1638892111,
                    1638892141,
                    1638892171,
                    1638892201,
                    1638892231,
                    1638892261,
                    1638892291,
                    1638892321,
                    1638892351,
                    1638892381,
                    1638892411,
                    1638892441,
                    1638892471,
                    1638892501,
                    1638892531,
                    1638892561,
                    1638892591,
                    1638892621,
                    1638892651,
                    1638892681,
                    1638892711,
                    1638892741,
                    1638892771,
                    1638892801,
                    1638892831,
                    1638892861,
                    1638892891,
                    1638892921,
                    1638892951,
                    1638892981,
                    1638893011,
                    1638893041,
                    1638893047
                  ],
                  timestamps: [
                    1638891571000,
                    1638891601000,
                    1638891631000,
                    1638891661000,
                    1638891691000,
                    1638891721000,
                    1638891751000,
                    1638891781000,
                    1638891811000,
                    1638891841000,
                    1638891871000,
                    1638891901000,
                    1638891931000,
                    1638891961000,
                    1638891991000,
                    1638892021000,
                    1638892051000,
                    1638892081000,
                    1638892111000,
                    1638892141000,
                    1638892171000,
                    1638892201000,
                    1638892231000,
                    1638892261000,
                    1638892291000,
                    1638892321000,
                    1638892351000,
                    1638892381000,
                    1638892411000,
                    1638892441000,
                    1638892471000,
                    1638892501000,
                    1638892531000,
                    1638892561000,
                    1638892591000,
                    1638892621000,
                    1638892651000,
                    1638892681000,
                    1638892711000,
                    1638892741000,
                    1638892771000,
                    1638892801000,
                    1638892831000,
                    1638892861000,
                    1638892891000,
                    1638892921000,
                    1638892951000,
                    1638892981000,
                    1638893011000,
                    1638893041000,
                    1638893047000
                  ],
                  trip_id: {
                    $oid: '61aff9adf3a4a081f777f39c'
                  }
                },
                type: 'Feature'
              }
            ],
            type: 'FeatureCollection'
          },
          {
            features: [
              {
                geometry: {
                  coordinates: [
                    [2.2705187, 48.8385616],
                    [2.270112225, 48.838842],
                    [2.2699623935483872, 48.839108448387094],
                    [2.26995544, 48.83920171333333],
                    [2.2700177, 48.8393046]
                  ],
                  type: 'LineString'
                },
                id: '61aff9adf3a4a081f777f3f1',
                properties: {
                  distance: 97.38351804178,
                  distances: [
                    0,
                    43.094121726730805,
                    31.5918459191552,
                    10.38306760875283,
                    12.314482787141156
                  ],
                  duration: 112,
                  end_fmt_time: dates.time2,
                  end_local_dt: {
                    day: 7,
                    hour: 17,
                    minute: 6,
                    month: 12,
                    second: 26,
                    timezone: 'Europe/Paris',
                    weekday: 1,
                    year: 2021
                  },
                  end_ts: 1638893186,
                  feature_type: 'section',
                  sensed_mode: 'PredictedModeTypes.WALKING',
                  source: 'SmoothedHighConfidenceMotion',
                  speeds: [
                    0,
                    1.4364707242243602,
                    1.0530615306385067,
                    0.34610225362509434,
                    0.5597492175973252
                  ],
                  start_fmt_time: dates.time7,
                  start_local_dt: {
                    day: 7,
                    hour: 17,
                    minute: 4,
                    month: 12,
                    second: 34,
                    timezone: 'Europe/Paris',
                    weekday: 1,
                    year: 2021
                  },
                  start_stop: {
                    $oid: '61aff9adf3a4a081f777f3f8'
                  },
                  start_ts: 1638893074,
                  times: [
                    1638893074,
                    1638893104,
                    1638893134,
                    1638893164,
                    1638893186
                  ],
                  timestamps: [
                    1638893074000,
                    1638893104000,
                    1638893134000,
                    1638893164000,
                    1638893186000
                  ],
                  trip_id: {
                    $oid: '61aff9adf3a4a081f777f39c'
                  }
                },
                type: 'Feature'
              }
            ],
            type: 'FeatureCollection'
          }
        ],
        id: '61aff9adf3a4a081f777f39c',
        properties: {
          distance: 10574.223034821085,
          duration: 2497,
          end_fmt_time: dates.time2,
          end_loc: {
            coordinates: [2.2700177, 48.8393046],
            type: 'Point'
          },
          end_local_dt: {
            day: 7,
            hour: 17,
            minute: 6,
            month: 12,
            second: 26,
            timezone: 'Europe/Paris',
            weekday: 1,
            year: 2021
          },
          end_place: {
            $oid: '61aff9b1f3a4a081f777f4f6'
          },
          end_ts: 1638893186,
          feature_type: 'trip',
          raw_trip: {
            $oid: '61aff9aaf3a4a081f777f34b'
          },
          source: 'DwellSegmentationTimeFilter',
          start_fmt_time: dates.time1,
          start_loc: {
            coordinates: [2.31251, 48.7799432],
            type: 'Point'
          },
          start_local_dt: {
            day: 7,
            hour: 16,
            minute: 24,
            month: 12,
            second: 49,
            timezone: 'Europe/Paris',
            weekday: 1,
            year: 2021
          },
          start_place: {
            $oid: '61aff9b0f3a4a081f777f4f5'
          },
          start_ts: 1638890689
        },
        type: 'FeatureCollection'
      }
    ],
    cozyMetadata: {
      sourceAccount: '23f8af047dfc736c8b841f22eb00464f'
    }
  }
}

module.exports = { getGeojson02, geoJson02Dates }
