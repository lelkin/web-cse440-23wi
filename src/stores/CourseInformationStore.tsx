import {
    DateTime,
    DateTimeFormatOptions,
} from 'luxon';

const DATE_FORMAT_OPTIONS = {
    month: 'long',
    day: 'numeric',
    weekday: 'long'
} as DateTimeFormatOptions;

export type link = string | null;
type dueDate = string | null;

function formatDateString(dateString: string): string {
    return DateTime.fromISO(dateString).toLocaleString(DATE_FORMAT_OPTIONS);
}

export class CourseInformationStore {
    //
    // Home
    //

    // Link to course Canvas
    linkCanvas: link = 'https://canvas.uw.edu/courses/1612132';

    // Link to course GitHub
    linkGitHub: link = 'https://github.com/uwcse440/web-cse440-23wi';

    // Link to university syllabus policies and guidelines
    linkUniversitySyllabusGuidelines: link = 'https://registrar.washington.edu/staffandfaculty/syllabus-guidelines/';

    //
    // Readings
    //
    linkReadingPersonalInformatics: link = 'https://doi.org/10.1145/1753326.1753409';
    linkReadingQuantifiedSelf: link = 'https://archive.wired.com/medtech/health/magazine/17-07/lbnp_knowthyself';

    //
    // Assignment 0
    //
    dueDateAssignment0: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-01-05') + '.';
    linkCanvasAssignment0: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941157';

    //
    // Assignment 1
    //
    dueDateAssignment1a: dueDate =
        'Uploaded 8:00pm ' + formatDateString('2023-01-05') + '.';
    linkCanvasAssignment1a: link = "https://canvas.uw.edu/courses/1612132/assignments/7941158";

    dueDateAssignment1b: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-01-11') + '.';
    linkCanvasAssignment1b: link = 'https://canvas.uw.edu/courses/1612132/assignments/8044498';
    dueDateAssignment1b_revised: dueDate =
        'Uploaded 8:00pm ' + formatDateString('2023-01-12') + '.';
    linkCanvasAssignment1b_revised: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941160';

    dueDateAssignment1c: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-01-16') + '.';
    linkCanvasAssignment1c: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941161';

    //
    // Assignment 2
    //
    dueDateAssignment2a: dueDate =
        'Completed in class ' + formatDateString('2023-01-17') + '.';
    linkCanvasAssignment2a: link = null;

    dueDateAssignment2b: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-01-19') + '.';
    linkCanvasAssignment2b: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941162';

    dueDateAssignment2c: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-01-23') + '.';
    linkCanvasAssignment2c: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941161';

    dueDateAssignment2d: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-01-26') + '.';
    linkCanvasAssignment2d: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941164';

    dueDateAssignment2e: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-01-30') + '.';
    linkCanvasAssignment2e: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941165';

    dueDateAssignment2f: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-02-01') + '.';
    linkCanvasAssignment2f: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941166';
    dueDateAssignment2f_revised: dueDate =
        'Uploaded 8:00pm ' + formatDateString('2023-02-02') + '.';
    linkCanvasAssignment2f_revised: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941167';

    dueDateAssignment2g: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-02-06') + '.';
    linkCanvasAssignment2g: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941168';

    dueDateAssignment2p: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-02-08') + '.';
    linkCanvasAssignment2p: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941169';

    //
    // Assignment 3
    //
    dueDateAssignment3a: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-02-13') + '.';
    linkCanvasAssignment3a: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941170';

    dueDateAssignment3b: dueDate =
        'Submitted with Assignment 3c.';

    dueDateAssignment3c: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-02-16') + '.';
    linkCanvasAssignment3c: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941172';

    dueDateAssignment3d: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-02-23') + '.';
    linkCanvasAssignment3d: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941173';

    dueDateAssignment3e: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-02-27') + '.';
    linkCanvasAssignment3e: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941174';

    dueDateAssignment3p: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-03-01') + '.';
    linkCanvasAssignment3p: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941175';

    //
    // Assignment 4
    //
    dueDateAssignment4web: dueDate =
        'Uploaded 11:59pm ' + formatDateString('2022-05-30') + '.';
    linkCanvasAssignment4web: link = 'https://canvas.uw.edu/courses/1545349/assignments/7332263';

    dueDateAssignment4web_final: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-03-07') + '.';
    linkCanvasAssignment4web_final: link = 'https://canvas.uw.edu/courses/1545349/assignments/7398746';

    dueDateAssignment4poster: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-03-08') + '.';
    linkCanvasAssignment4poster: link = 'https://canvas.uw.edu/courses/1545349/assignments/7398750';

    dueDateAssignment4poster_final: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-03-09') + '.';
    linkCanvasAssignment4poster_final: link = 'https://canvas.uw.edu/courses/1545349/assignments/7398752';

    dueDateAssignment4poster_session: dueDate = '11:00 - 12:00 ' + formatDateString('2023-03-13') + ' in the CSE Atrium.';

    //
    // Samples
    //
    projectSamples = [
        /* TODO Samples */
        {
            name: 'BackTrack',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/backtrack/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133304',
                '1c': 'https://canvas.uw.edu/files/100133305',
                '2b': 'https://canvas.uw.edu/files/100133306',
                '2c': 'https://canvas.uw.edu/files/100133307',
                '2d': 'https://canvas.uw.edu/files/100133308',
                '2e': 'https://canvas.uw.edu/files/100133309',
                '2f': 'https://canvas.uw.edu/files/100133310',
                '2g': 'https://canvas.uw.edu/files/100133311',
                '2h': 'https://canvas.uw.edu/files/100133312',
                '2p': 'https://canvas.uw.edu/files/100133313',
                '3a': 'https://canvas.uw.edu/files/100133314',
                '3b': 'https://canvas.uw.edu/files/100133315',
                '3c': 'https://canvas.uw.edu/files/100133316',
                '3d': 'https://canvas.uw.edu/files/100133317',
                '3e': 'https://canvas.uw.edu/files/100133318',
                '3p': 'https://canvas.uw.edu/files/100133319',
                '4poster': 'https://canvas.uw.edu/files/100133320'
            },
        },
        {
            name: 'BookWurm',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/bookwurm/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133321',
                '1c': 'https://canvas.uw.edu/files/100133322',
                '2b': 'https://canvas.uw.edu/files/100133323',
                '2c': 'https://canvas.uw.edu/files/100133325',
                '2d': 'https://canvas.uw.edu/files/100133326',
                '2e': 'https://canvas.uw.edu/files/100133327',
                '2f': 'https://canvas.uw.edu/files/100133328',
                '2g': 'https://canvas.uw.edu/files/100133329',
                '2h': 'https://canvas.uw.edu/files/100133330',
                '2p': 'https://canvas.uw.edu/files/100133331',
                '3a': 'https://canvas.uw.edu/files/100133332',
                '3c': 'https://canvas.uw.edu/files/100133333',
                '3d': 'https://canvas.uw.edu/files/100133334',
                '3e': 'https://canvas.uw.edu/files/100133335',
                '3p': 'https://canvas.uw.edu/files/100133336',
                '4poster': 'https://canvas.uw.edu/files/100133337',
            }
        },
        {
            name: 'Clark',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/clark',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133338',
                '1c': 'https://canvas.uw.edu/files/100133339',
                '2b': 'https://canvas.uw.edu/files/100133340',
                '2c': 'https://canvas.uw.edu/files/100133341',
                '2d': 'https://canvas.uw.edu/files/100133342',
                '2e': 'https://canvas.uw.edu/files/100133343',
                '2f': 'https://canvas.uw.edu/files/100133344',
                '2g': 'https://canvas.uw.edu/files/100133345',
                '2p': 'https://canvas.uw.edu/files/100133346',
                '3a': 'https://canvas.uw.edu/files/100133347',
                '3c': 'https://canvas.uw.edu/files/100133348',
                '3d': 'https://canvas.uw.edu/files/100133349',
                '3e': 'https://canvas.uw.edu/files/100133350',
                '3p': 'https://canvas.uw.edu/files/100133351',
                '4poster': 'https://canvas.uw.edu/files/100133352'
            }
        },
        {
            name: 'Cup-anion',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/cupanion',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133353',
                '1c': 'https://canvas.uw.edu/files/100133354',
                '2b': 'https://canvas.uw.edu/files/100133355',
                '2c': 'https://canvas.uw.edu/files/100133356',
                '2d': 'https://canvas.uw.edu/files/100133357',
                '2e': 'https://canvas.uw.edu/files/100133358',
                '2f': 'https://canvas.uw.edu/files/100133359',
                '2g': 'https://canvas.uw.edu/files/100133360',
                '2p': 'https://canvas.uw.edu/files/100133361',
                '3a': 'https://canvas.uw.edu/files/100133362',
                '3c': 'https://canvas.uw.edu/files/100133363',
                '3d': 'https://canvas.uw.edu/files/100133364',
                '3e': 'https://canvas.uw.edu/files/100133365',
                '3p': 'https://canvas.uw.edu/files/100133366',
                '4poster': 'https://canvas.uw.edu/files/100133367'
            }
        },
        {
            name: 'Dash',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/dash/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133368',
                '1c': 'https://canvas.uw.edu/files/100133369',
                '2b': 'https://canvas.uw.edu/files/100133370',
                '2c': 'https://canvas.uw.edu/files/100133371',
                '2d': 'https://canvas.uw.edu/files/100133372',
                '2e': 'https://canvas.uw.edu/files/100133373',
                '2f': 'https://canvas.uw.edu/files/100133374',
                '2g': 'https://canvas.uw.edu/files/100133375',
                '2h': 'https://canvas.uw.edu/files/100133376',
                '2p': 'https://canvas.uw.edu/files/100133377',
                '3a': 'https://canvas.uw.edu/files/100133378',
                '3c': 'https://canvas.uw.edu/files/100133379',
                '3d': 'https://canvas.uw.edu/files/100133380',
                '3e': 'https://canvas.uw.edu/files/100133381',
                '3p': 'https://canvas.uw.edu/files/100133382',
                '4poster': 'https://canvas.uw.edu/files/100133383'
            }
        },
        {
            name: 'Hermes',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/hermes/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133384',
                '1c': 'https://canvas.uw.edu/files/100133385',
                '2b': 'https://canvas.uw.edu/files/100133386',
                '2c': 'https://canvas.uw.edu/files/100133387',
                '2d': 'https://canvas.uw.edu/files/100133388',
                '2e': 'https://canvas.uw.edu/files/100133389',
                '2f': 'https://canvas.uw.edu/files/100133390',
                '2g': 'https://canvas.uw.edu/files/100133391',
                '2h': 'https://canvas.uw.edu/files/100133392',
                '2p': 'https://canvas.uw.edu/files/100133393',
                '3a': 'https://canvas.uw.edu/files/100133394',
                '3b': 'https://canvas.uw.edu/files/100133395',
                '3c': 'https://canvas.uw.edu/files/100133396',
                '3d': 'https://canvas.uw.edu/files/100133397',
                '3e': 'https://canvas.uw.edu/files/100133398',
                '3p': 'https://canvas.uw.edu/files/100133399',
                '4poster': 'https://canvas.uw.edu/files/100133400'
            }
        },
        {
            name: 'Jasper',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133401',
                '1c': 'https://canvas.uw.edu/files/100133402',
                '2b': 'https://canvas.uw.edu/files/100133403',
                '2c': 'https://canvas.uw.edu/files/100133404',
                '2d': 'https://canvas.uw.edu/files/100133405',
                '2e': 'https://canvas.uw.edu/files/100133406',
                '2f': 'https://canvas.uw.edu/files/100133407',
                '2g': 'https://canvas.uw.edu/files/100133408',
                '2h': 'https://canvas.uw.edu/files/100133409',
                '2p': 'https://canvas.uw.edu/files/100133410',
                '3a': 'https://canvas.uw.edu/files/100133411',
                '3c': 'https://canvas.uw.edu/files/100133412',
                '3d': 'https://canvas.uw.edu/files/100133413',
                '3e': 'https://canvas.uw.edu/files/100133414',
                '3p': 'https://canvas.uw.edu/files/100133415',
                '4poster': 'https://canvas.uw.edu/files/100133416'
            }
        },
        {
            name: 'Laundr',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/laundr/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133417',
                '1c': 'https://canvas.uw.edu/files/100133418',
                '2b': 'https://canvas.uw.edu/files/100133419',
                '2c': 'https://canvas.uw.edu/files/100133420',
                '2d': 'https://canvas.uw.edu/files/100133421',
                '2e': 'https://canvas.uw.edu/files/100133422',
                '2f': 'https://canvas.uw.edu/files/100133423',
                '2g': 'https://canvas.uw.edu/files/100133424',
                '2h': 'https://canvas.uw.edu/files/100133425',
                '2p': 'https://canvas.uw.edu/files/100133426',
                '3a': 'https://canvas.uw.edu/files/100133427',
                '3c': 'https://canvas.uw.edu/files/100133428',
                '3d': 'https://canvas.uw.edu/files/100133429',
                '3e': 'https://canvas.uw.edu/files/100133430',
                '3p': 'https://canvas.uw.edu/files/100133431',
                '4poster': 'https://canvas.uw.edu/files/100133433'
            }
        },
        {
            name: 'notE',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/note/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133434',
                '1c': 'https://canvas.uw.edu/files/100133435',
                '2b': 'https://canvas.uw.edu/files/100133436',
                '2c': 'https://canvas.uw.edu/files/100133437',
                '2d': 'https://canvas.uw.edu/files/100133438',
                '2e': 'https://canvas.uw.edu/files/100133439',
                '2f': 'https://canvas.uw.edu/files/100133440',
                '2g': 'https://canvas.uw.edu/files/100133441',
                '2h': 'https://canvas.uw.edu/files/100133442',
                '2p': 'https://canvas.uw.edu/files/100133443',
                '3a': 'https://canvas.uw.edu/files/100133444',
                '3c': 'https://canvas.uw.edu/files/100133445',
                '3d': 'https://canvas.uw.edu/files/100133446',
                '3e': 'https://canvas.uw.edu/files/100133447',
                '3p': 'https://canvas.uw.edu/files/100133448',
                '4poster': 'https://canvas.uw.edu/files/100134675'
            }
        },
        {
            name: 'Pawsitive',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/pawsitive/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133449',
                '1c': 'https://canvas.uw.edu/files/100133450',
                '2b': 'https://canvas.uw.edu/files/100133451',
                '2c': 'https://canvas.uw.edu/files/100133452',
                '2d': 'https://canvas.uw.edu/files/100133453',
                '2e': 'https://canvas.uw.edu/files/100133454',
                '2f': 'https://canvas.uw.edu/files/100133455',
                '2g': 'https://canvas.uw.edu/files/100133456',
                '2h': 'https://canvas.uw.edu/files/100133457',
                '2p': 'https://canvas.uw.edu/files/100133458',
                '3a': 'https://canvas.uw.edu/files/100133460',
                '3c': 'https://canvas.uw.edu/files/100133461',
                '3d': 'https://canvas.uw.edu/files/100133462',
                '3e': 'https://canvas.uw.edu/files/100133463',
                '3p': 'https://canvas.uw.edu/files/100133464',
                '4poster': 'https://canvas.uw.edu/files/100133465'            }
        },
        {
            name: 'Pilltender',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/pilltender/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133466',
                '1c': 'https://canvas.uw.edu/files/100133467',
                '2b': 'https://canvas.uw.edu/files/100133468',
                '2c': 'https://canvas.uw.edu/files/100133469',
                '2d': 'https://canvas.uw.edu/files/100133470',
                '2e': 'https://canvas.uw.edu/files/100133471',
                '2f': 'https://canvas.uw.edu/files/100133472',
                '2g': 'https://canvas.uw.edu/files/100133473',
                '2h': 'https://canvas.uw.edu/files/100133474',
                '2p': 'https://canvas.uw.edu/files/100133475',
                '3a': 'https://canvas.uw.edu/files/100133476',
                '3b': 'https://canvas.uw.edu/files/100133477',
                '3c': 'https://canvas.uw.edu/files/100133478',
                '3d': 'https://canvas.uw.edu/files/100133479',
                '3e': 'https://canvas.uw.edu/files/100133480',
                '3p': 'https://canvas.uw.edu/files/100133481',
                '4poster': 'https://canvas.uw.edu/files/100133482'
            }
        },
        {
            name: 'SEEK',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/seek/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133483',
                '1c': 'https://canvas.uw.edu/files/100133484',
                '2b': 'https://canvas.uw.edu/files/100133485',
                '2c': 'https://canvas.uw.edu/files/100133486',
                '2d': 'https://canvas.uw.edu/files/100133487',
                '2e': 'https://canvas.uw.edu/files/100133488',
                '2f': 'https://canvas.uw.edu/files/100133489',
                '2g': 'https://canvas.uw.edu/files/100133490',
                '2h': 'https://canvas.uw.edu/files/100133491',
                '2p': 'https://canvas.uw.edu/files/100133492',
                '3a': 'https://canvas.uw.edu/files/100133493',
                '3c': 'https://canvas.uw.edu/files/100133494',
                '3d': 'https://canvas.uw.edu/files/100133495',
                '3e': 'https://canvas.uw.edu/files/100133496',
                '3p': 'https://canvas.uw.edu/files/100133497',
                '4poster': 'https://canvas.uw.edu/files/100133498'
            }
        },
        {
            name: 'SimPark',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/simpark/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133499',
                '1c': 'https://canvas.uw.edu/files/100133500',
                '2b': 'https://canvas.uw.edu/files/100133501',
                '2c': 'https://canvas.uw.edu/files/100133502',
                '2d': 'https://canvas.uw.edu/files/100133503',
                '2e': 'https://canvas.uw.edu/files/100133504',
                '2f': 'https://canvas.uw.edu/files/100133505',
                '2g': 'https://canvas.uw.edu/files/100133506',
                '2h': 'https://canvas.uw.edu/files/100133507',
                '2p': 'https://canvas.uw.edu/files/100133508',
                '3a': 'https://canvas.uw.edu/files/100133509',
                '3b': 'https://canvas.uw.edu/files/100133510',
                '3c': 'https://canvas.uw.edu/files/100133511',
                '3d': 'https://canvas.uw.edu/files/100133512',
                '3e': 'https://canvas.uw.edu/files/100133513',
                '3p': 'https://canvas.uw.edu/files/100133514',
                '4poster': 'https://canvas.uw.edu/files/100133515'
            }
        },
        {
            name: 'Sprout',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/sprout',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133516',
                '1c': 'https://canvas.uw.edu/files/100133517',
                '2b': 'https://canvas.uw.edu/files/100133518',
                '2c': 'https://canvas.uw.edu/files/100133519',
                '2d': 'https://canvas.uw.edu/files/100133520',
                '2e': 'https://canvas.uw.edu/files/100133521',
                '2f': 'https://canvas.uw.edu/files/100133522',
                '2g': 'https://canvas.uw.edu/files/100133523',
                '2p': 'https://canvas.uw.edu/files/100133524',
                '3a': 'https://canvas.uw.edu/files/100133525',
                '3c': 'https://canvas.uw.edu/files/100133526',
                '3d': 'https://canvas.uw.edu/files/100133527',
                '3e': 'https://canvas.uw.edu/files/100133528',
                '3p': 'https://canvas.uw.edu/files/100133529',
                '4poster': 'https://canvas.uw.edu/files/100133530'
            }
        },
        {
            name: 'Waste Wizard',
            link: 'https://courses.cs.washington.edu/courses/cse440/22sp/projects/wastewizard',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133531',
                '1c': 'https://canvas.uw.edu/files/100133532',
                '2b': 'https://canvas.uw.edu/files/100133533',
                '2c': 'https://canvas.uw.edu/files/100133534',
                '2d': 'https://canvas.uw.edu/files/100133535',
                '2e': 'https://canvas.uw.edu/files/100133536',
                '2f': 'https://canvas.uw.edu/files/100133537',
                '2g': 'https://canvas.uw.edu/files/100133539',
                '2p': 'https://canvas.uw.edu/files/100133540',
                '3a': 'https://canvas.uw.edu/files/100133541',
                '3c': 'https://canvas.uw.edu/files/100133542',
                '3d': 'https://canvas.uw.edu/files/100133544',
                '3e': 'https://canvas.uw.edu/files/100133545',
                '3p': 'https://canvas.uw.edu/files/100133546',
                '4poster': 'https://canvas.uw.edu/files/100133556'
            }
        },
        {
            name: 'Wishing Well',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/wishingwell/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/100133560',
                '1c': 'https://canvas.uw.edu/files/100133563',
                '2b': 'https://canvas.uw.edu/files/100133568',
                '2c': 'https://canvas.uw.edu/files/100133573',
                '2d': 'https://canvas.uw.edu/files/100133578',
                '2e': 'https://canvas.uw.edu/files/100133583',
                '2f': 'https://canvas.uw.edu/files/100133600',
                '2g': 'https://canvas.uw.edu/files/100133607',
                '2h': 'https://canvas.uw.edu/files/100133611',
                '2p': 'https://canvas.uw.edu/files/100133618',
                '3a': 'https://canvas.uw.edu/files/100133624',
                '3c': 'https://canvas.uw.edu/files/100133633',
                '3d': 'https://canvas.uw.edu/files/100133639',
                '3e': 'https://canvas.uw.edu/files/100133643',
                '3p': 'https://canvas.uw.edu/files/100133648',
                '4poster': 'https://canvas.uw.edu/files/100133654'
            }
        }
    ]

    // // Link regarding accessible presentations
    // // linkAccessiblePresentations: link = 'https://interactions.acm.org/archive/view/july-august-2017/making-your-presentation-accessible'
}
