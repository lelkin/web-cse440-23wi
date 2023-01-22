/**
 * Assignments for each sample assignment.
 */
const AssignmentSampleLinkKeyValues = [
    'assignment1b',
    'assignment1c',
    'assignment2b',
    'assignment2c',
    'assignment2d',
    'assignment2e',
    'assignment2f',
    'assignment2g',
    'assignment2h',
    'assignment2p',
    'assignment3a',
    'assignment3b',
    'assignment3c',
    'assignment3d',
    'assignment3e',
    'assignment3p',
    'assignment4poster',
];
type AssignmentSampleLinkKey = typeof AssignmentSampleLinkKeyValues[number];

type AssignmentSampleLinks = {
    [item in AssignmentSampleLinkKey]: string
}

/**
 * Names for each sample project.
 */
const ProjectSampleKeyValues = [
    'backtrack',
    'bookwurm',
    'clark',
    'cupanion',
    'dash',
    'hermes',
    'jasper',
    'laundr',
    'note',
    'pawsitive',
    'pilltender',
    'seek',
    'simpark',
    'sprout',
    'wastewizard',
    'wishingwell',
];
type ProjectSampleKey = typeof ProjectSampleKeyValues[number];

/**
 * A sample project.
 */
export interface ProjectSample {
    name: string,
    link: string,
    sampleLinks: AssignmentSampleLinks,
}

/**
 * Collection of sample projects.
 */
type ProjectSamples = {
    [item in ProjectSampleKey]: ProjectSample
}

export interface ProjectSamplesStore {
    samples: ProjectSamples,
}

export class ProjectSamplesStoreImpl implements ProjectSamplesStore {
    samples = {
        backtrack: {
            name: 'BackTrack',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/backtrack/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133304',
                assignment1c: 'https://canvas.uw.edu/files/100133305',
                assignment2b: 'https://canvas.uw.edu/files/100133306',
                assignment2c: 'https://canvas.uw.edu/files/100133307',
                assignment2d: 'https://canvas.uw.edu/files/100133308',
                assignment2e: 'https://canvas.uw.edu/files/100133309',
                assignment2f: 'https://canvas.uw.edu/files/100133310',
                assignment2g: 'https://canvas.uw.edu/files/100133311',
                // '2h': 'https://canvas.uw.edu/files/100133312',
                assignment2p: 'https://canvas.uw.edu/files/100133313',
                assignment3a: 'https://canvas.uw.edu/files/100133314',
                // '3b': 'https://canvas.uw.edu/files/100133315',
                assignment3c: 'https://canvas.uw.edu/files/100133316',
                assignment3d: 'https://canvas.uw.edu/files/100133317',
                assignment3e: 'https://canvas.uw.edu/files/100133318',
                assignment3p: 'https://canvas.uw.edu/files/100133319',
                assignment4poster: 'https://canvas.uw.edu/files/100133320'
            },
        },
        bookwurm: {
            name: 'BookWurm',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/bookwurm/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133321',
                assignment1c: 'https://canvas.uw.edu/files/100133322',
                assignment2b: 'https://canvas.uw.edu/files/100133323',
                assignment2c: 'https://canvas.uw.edu/files/100133325',
                assignment2d: 'https://canvas.uw.edu/files/100133326',
                assignment2e: 'https://canvas.uw.edu/files/100133327',
                assignment2f: 'https://canvas.uw.edu/files/100133328',
                assignment2g: 'https://canvas.uw.edu/files/100133329',
                // '2h': 'https://canvas.uw.edu/files/100133330',
                assignment2p: 'https://canvas.uw.edu/files/100133331',
                assignment3a: 'https://canvas.uw.edu/files/100133332',
                assignment3c: 'https://canvas.uw.edu/files/100133333',
                assignment3d: 'https://canvas.uw.edu/files/100133334',
                assignment3e: 'https://canvas.uw.edu/files/100133335',
                assignment3p: 'https://canvas.uw.edu/files/100133336',
                assignment4poster: 'https://canvas.uw.edu/files/100133337',
            }
        },
        clark: {
            name: 'Clark',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/clark',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133338',
                assignment1c: 'https://canvas.uw.edu/files/100133339',
                assignment2b: 'https://canvas.uw.edu/files/100133340',
                assignment2c: 'https://canvas.uw.edu/files/100133341',
                assignment2d: 'https://canvas.uw.edu/files/100133342',
                assignment2e: 'https://canvas.uw.edu/files/100133343',
                assignment2f: 'https://canvas.uw.edu/files/100133344',
                assignment2g: 'https://canvas.uw.edu/files/100133345',
                assignment2p: 'https://canvas.uw.edu/files/100133346',
                assignment3a: 'https://canvas.uw.edu/files/100133347',
                assignment3c: 'https://canvas.uw.edu/files/100133348',
                assignment3d: 'https://canvas.uw.edu/files/100133349',
                assignment3e: 'https://canvas.uw.edu/files/100133350',
                assignment3p: 'https://canvas.uw.edu/files/100133351',
                assignment4poster: 'https://canvas.uw.edu/files/100133352'
            }
        },
        cupanion: {
            name: 'Cup-anion',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/cupanion',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133353',
                assignment1c: 'https://canvas.uw.edu/files/100133354',
                assignment2b: 'https://canvas.uw.edu/files/100133355',
                assignment2c: 'https://canvas.uw.edu/files/100133356',
                assignment2d: 'https://canvas.uw.edu/files/100133357',
                assignment2e: 'https://canvas.uw.edu/files/100133358',
                assignment2f: 'https://canvas.uw.edu/files/100133359',
                assignment2g: 'https://canvas.uw.edu/files/100133360',
                assignment2p: 'https://canvas.uw.edu/files/100133361',
                assignment3a: 'https://canvas.uw.edu/files/100133362',
                assignment3c: 'https://canvas.uw.edu/files/100133363',
                assignment3d: 'https://canvas.uw.edu/files/100133364',
                assignment3e: 'https://canvas.uw.edu/files/100133365',
                assignment3p: 'https://canvas.uw.edu/files/100133366',
                assignment4poster: 'https://canvas.uw.edu/files/100133367'
            }
        },
        dash: {
            name: 'Dash',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/dash/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133368',
                assignment1c: 'https://canvas.uw.edu/files/100133369',
                assignment2b: 'https://canvas.uw.edu/files/100133370',
                assignment2c: 'https://canvas.uw.edu/files/100133371',
                assignment2d: 'https://canvas.uw.edu/files/100133372',
                assignment2e: 'https://canvas.uw.edu/files/100133373',
                assignment2f: 'https://canvas.uw.edu/files/100133374',
                assignment2g: 'https://canvas.uw.edu/files/100133375',
                // '2h': 'https://canvas.uw.edu/files/100133376',
                assignment2p: 'https://canvas.uw.edu/files/100133377',
                assignment3a: 'https://canvas.uw.edu/files/100133378',
                assignment3c: 'https://canvas.uw.edu/files/100133379',
                assignment3d: 'https://canvas.uw.edu/files/100133380',
                assignment3e: 'https://canvas.uw.edu/files/100133381',
                assignment3p: 'https://canvas.uw.edu/files/100133382',
                assignment4poster: 'https://canvas.uw.edu/files/100133383'
            }
        },
        hermes: {
            name: 'Hermes',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/hermes/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133384',
                assignment1c: 'https://canvas.uw.edu/files/100133385',
                assignment2b: 'https://canvas.uw.edu/files/100133386',
                assignment2c: 'https://canvas.uw.edu/files/100133387',
                assignment2d: 'https://canvas.uw.edu/files/100133388',
                assignment2e: 'https://canvas.uw.edu/files/100133389',
                assignment2f: 'https://canvas.uw.edu/files/100133390',
                assignment2g: 'https://canvas.uw.edu/files/100133391',
                // '2h': 'https://canvas.uw.edu/files/100133392',
                assignment2p: 'https://canvas.uw.edu/files/100133393',
                assignment3a: 'https://canvas.uw.edu/files/100133394',
                // '3b': 'https://canvas.uw.edu/files/100133395',
                assignment3c: 'https://canvas.uw.edu/files/100133396',
                assignment3d: 'https://canvas.uw.edu/files/100133397',
                assignment3e: 'https://canvas.uw.edu/files/100133398',
                assignment3p: 'https://canvas.uw.edu/files/100133399',
                assignment4poster: 'https://canvas.uw.edu/files/100133400'
            }
        },
        jasper: {
            name: 'Jasper',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133401',
                assignment1c: 'https://canvas.uw.edu/files/100133402',
                assignment2b: 'https://canvas.uw.edu/files/100133403',
                assignment2c: 'https://canvas.uw.edu/files/100133404',
                assignment2d: 'https://canvas.uw.edu/files/100133405',
                assignment2e: 'https://canvas.uw.edu/files/100133406',
                assignment2f: 'https://canvas.uw.edu/files/100133407',
                assignment2g: 'https://canvas.uw.edu/files/100133408',
                // '2h': 'https://canvas.uw.edu/files/100133409',
                assignment2p: 'https://canvas.uw.edu/files/100133410',
                assignment3a: 'https://canvas.uw.edu/files/100133411',
                assignment3c: 'https://canvas.uw.edu/files/100133412',
                assignment3d: 'https://canvas.uw.edu/files/100133413',
                assignment3e: 'https://canvas.uw.edu/files/100133414',
                assignment3p: 'https://canvas.uw.edu/files/100133415',
                assignment4poster: 'https://canvas.uw.edu/files/100133416'
            }
        },
        laundr: {
            name: 'Laundr',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/laundr/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133417',
                assignment1c: 'https://canvas.uw.edu/files/100133418',
                assignment2b: 'https://canvas.uw.edu/files/100133419',
                assignment2c: 'https://canvas.uw.edu/files/100133420',
                assignment2d: 'https://canvas.uw.edu/files/100133421',
                assignment2e: 'https://canvas.uw.edu/files/100133422',
                assignment2f: 'https://canvas.uw.edu/files/100133423',
                assignment2g: 'https://canvas.uw.edu/files/100133424',
                // '2h': 'https://canvas.uw.edu/files/100133425',
                assignment2p: 'https://canvas.uw.edu/files/100133426',
                assignment3a: 'https://canvas.uw.edu/files/100133427',
                assignment3c: 'https://canvas.uw.edu/files/100133428',
                assignment3d: 'https://canvas.uw.edu/files/100133429',
                assignment3e: 'https://canvas.uw.edu/files/100133430',
                assignment3p: 'https://canvas.uw.edu/files/100133431',
                assignment4poster: 'https://canvas.uw.edu/files/100133433'
            }
        },
        note: {
            name: 'notE',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/note/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133434',
                assignment1c: 'https://canvas.uw.edu/files/100133435',
                assignment2b: 'https://canvas.uw.edu/files/100133436',
                assignment2c: 'https://canvas.uw.edu/files/100133437',
                assignment2d: 'https://canvas.uw.edu/files/100133438',
                assignment2e: 'https://canvas.uw.edu/files/100133439',
                assignment2f: 'https://canvas.uw.edu/files/100133440',
                assignment2g: 'https://canvas.uw.edu/files/100133441',
                // '2h': 'https://canvas.uw.edu/files/100133442',
                assignment2p: 'https://canvas.uw.edu/files/100133443',
                assignment3a: 'https://canvas.uw.edu/files/100133444',
                assignment3c: 'https://canvas.uw.edu/files/100133445',
                assignment3d: 'https://canvas.uw.edu/files/100133446',
                assignment3e: 'https://canvas.uw.edu/files/100133447',
                assignment3p: 'https://canvas.uw.edu/files/100133448',
                assignment4poster: 'https://canvas.uw.edu/files/100134675'
            }
        },
        pawsitive: {
            name: 'Pawsitive',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/pawsitive/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133449',
                assignment1c: 'https://canvas.uw.edu/files/100133450',
                assignment2b: 'https://canvas.uw.edu/files/100133451',
                assignment2c: 'https://canvas.uw.edu/files/100133452',
                assignment2d: 'https://canvas.uw.edu/files/100133453',
                assignment2e: 'https://canvas.uw.edu/files/100133454',
                assignment2f: 'https://canvas.uw.edu/files/100133455',
                assignment2g: 'https://canvas.uw.edu/files/100133456',
                // '2h': 'https://canvas.uw.edu/files/100133457',
                assignment2p: 'https://canvas.uw.edu/files/100133458',
                assignment3a: 'https://canvas.uw.edu/files/100133460',
                assignment3c: 'https://canvas.uw.edu/files/100133461',
                assignment3d: 'https://canvas.uw.edu/files/100133462',
                assignment3e: 'https://canvas.uw.edu/files/100133463',
                assignment3p: 'https://canvas.uw.edu/files/100133464',
                assignment4poster: 'https://canvas.uw.edu/files/100133465'            }
        },
        pilltender: {
            name: 'Pilltender',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/pilltender/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133466',
                assignment1c: 'https://canvas.uw.edu/files/100133467',
                assignment2b: 'https://canvas.uw.edu/files/100133468',
                assignment2c: 'https://canvas.uw.edu/files/100133469',
                assignment2d: 'https://canvas.uw.edu/files/100133470',
                assignment2e: 'https://canvas.uw.edu/files/100133471',
                assignment2f: 'https://canvas.uw.edu/files/100133472',
                assignment2g: 'https://canvas.uw.edu/files/100133473',
                '2h': 'https://canvas.uw.edu/files/100133474',
                assignment2p: 'https://canvas.uw.edu/files/100133475',
                assignment3a: 'https://canvas.uw.edu/files/100133476',
                '3b': 'https://canvas.uw.edu/files/100133477',
                assignment3c: 'https://canvas.uw.edu/files/100133478',
                assignment3d: 'https://canvas.uw.edu/files/100133479',
                assignment3e: 'https://canvas.uw.edu/files/100133480',
                assignment3p: 'https://canvas.uw.edu/files/100133481',
                assignment4poster: 'https://canvas.uw.edu/files/100133482'
            }
        },
        seek: {
            name: 'SEEK',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/seek/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133483',
                assignment1c: 'https://canvas.uw.edu/files/100133484',
                assignment2b: 'https://canvas.uw.edu/files/100133485',
                assignment2c: 'https://canvas.uw.edu/files/100133486',
                assignment2d: 'https://canvas.uw.edu/files/100133487',
                assignment2e: 'https://canvas.uw.edu/files/100133488',
                assignment2f: 'https://canvas.uw.edu/files/100133489',
                assignment2g: 'https://canvas.uw.edu/files/100133490',
                // '2h': 'https://canvas.uw.edu/files/100133491',
                assignment2p: 'https://canvas.uw.edu/files/100133492',
                assignment3a: 'https://canvas.uw.edu/files/100133493',
                assignment3c: 'https://canvas.uw.edu/files/100133494',
                assignment3d: 'https://canvas.uw.edu/files/100133495',
                assignment3e: 'https://canvas.uw.edu/files/100133496',
                assignment3p: 'https://canvas.uw.edu/files/100133497',
                assignment4poster: 'https://canvas.uw.edu/files/100133498'
            }
        },
        simpark: {
            name: 'SimPark',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/simpark/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133499',
                assignment1c: 'https://canvas.uw.edu/files/100133500',
                assignment2b: 'https://canvas.uw.edu/files/100133501',
                assignment2c: 'https://canvas.uw.edu/files/100133502',
                assignment2d: 'https://canvas.uw.edu/files/100133503',
                assignment2e: 'https://canvas.uw.edu/files/100133504',
                assignment2f: 'https://canvas.uw.edu/files/100133505',
                assignment2g: 'https://canvas.uw.edu/files/100133506',
                // '2h': 'https://canvas.uw.edu/files/100133507',
                assignment2p: 'https://canvas.uw.edu/files/100133508',
                assignment3a: 'https://canvas.uw.edu/files/100133509',
                // '3b': 'https://canvas.uw.edu/files/100133510',
                assignment3c: 'https://canvas.uw.edu/files/100133511',
                assignment3d: 'https://canvas.uw.edu/files/100133512',
                assignment3e: 'https://canvas.uw.edu/files/100133513',
                assignment3p: 'https://canvas.uw.edu/files/100133514',
                assignment4poster: 'https://canvas.uw.edu/files/100133515'
            }
        },
        sprout: {
            name: 'Sprout',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/sprout',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133516',
                assignment1c: 'https://canvas.uw.edu/files/100133517',
                assignment2b: 'https://canvas.uw.edu/files/100133518',
                assignment2c: 'https://canvas.uw.edu/files/100133519',
                assignment2d: 'https://canvas.uw.edu/files/100133520',
                assignment2e: 'https://canvas.uw.edu/files/100133521',
                assignment2f: 'https://canvas.uw.edu/files/100133522',
                assignment2g: 'https://canvas.uw.edu/files/100133523',
                assignment2p: 'https://canvas.uw.edu/files/100133524',
                assignment3a: 'https://canvas.uw.edu/files/100133525',
                assignment3c: 'https://canvas.uw.edu/files/100133526',
                assignment3d: 'https://canvas.uw.edu/files/100133527',
                assignment3e: 'https://canvas.uw.edu/files/100133528',
                assignment3p: 'https://canvas.uw.edu/files/100133529',
                assignment4poster: 'https://canvas.uw.edu/files/100133530'
            }
        },
        wastewizard: {
            name: 'Waste Wizard',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/wastewizard',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133531',
                assignment1c: 'https://canvas.uw.edu/files/100133532',
                assignment2b: 'https://canvas.uw.edu/files/100133533',
                assignment2c: 'https://canvas.uw.edu/files/100133534',
                assignment2d: 'https://canvas.uw.edu/files/100133535',
                assignment2e: 'https://canvas.uw.edu/files/100133536',
                assignment2f: 'https://canvas.uw.edu/files/100133537',
                assignment2g: 'https://canvas.uw.edu/files/100133539',
                assignment2p: 'https://canvas.uw.edu/files/100133540',
                assignment3a: 'https://canvas.uw.edu/files/100133541',
                assignment3c: 'https://canvas.uw.edu/files/100133542',
                assignment3d: 'https://canvas.uw.edu/files/100133544',
                assignment3e: 'https://canvas.uw.edu/files/100133545',
                assignment3p: 'https://canvas.uw.edu/files/100133546',
                assignment4poster: 'https://canvas.uw.edu/files/100133556'
            }
        },
        wishingwell: {
            name: 'Wishing Well',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/wishingwell/',
            sampleLinks: {
                assignment1b: 'https://canvas.uw.edu/files/100133560',
                assignment1c: 'https://canvas.uw.edu/files/100133563',
                assignment2b: 'https://canvas.uw.edu/files/100133568',
                assignment2c: 'https://canvas.uw.edu/files/100133573',
                assignment2d: 'https://canvas.uw.edu/files/100133578',
                assignment2e: 'https://canvas.uw.edu/files/100133583',
                assignment2f: 'https://canvas.uw.edu/files/100133600',
                assignment2g: 'https://canvas.uw.edu/files/100133607',
                // '2h': 'https://canvas.uw.edu/files/100133611',
                assignment2p: 'https://canvas.uw.edu/files/100133618',
                assignment3a: 'https://canvas.uw.edu/files/100133624',
                assignment3c: 'https://canvas.uw.edu/files/100133633',
                assignment3d: 'https://canvas.uw.edu/files/100133639',
                assignment3e: 'https://canvas.uw.edu/files/100133643',
                assignment3p: 'https://canvas.uw.edu/files/100133648',
                assignment4poster: 'https://canvas.uw.edu/files/100133654'
            }
        }
    }
}
