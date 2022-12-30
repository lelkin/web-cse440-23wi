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
        'Uploaded 3:00pm ' + formatDateString('2023-01-05') + '.';
    linkCanvasAssignment1a: link = "https://canvas.uw.edu/courses/1612132/assignments/7941158";

    dueDateAssignment1b: dueDate =
        'Uploaded 3:00pm ' + formatDateString('2023-01-11') + '.';
    linkCanvasAssignment1b: link = 'https://canvas.uw.edu/courses/1612132/assignments/7941159';
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
                '1b': 'https://canvas.uw.edu/files/90572599',
                '1c': 'https://canvas.uw.edu/files/90491667',
                '2b': 'https://canvas.uw.edu/files/90572601',
                '2c': 'https://canvas.uw.edu/files/90572602',
                '2d': 'https://canvas.uw.edu/files/90572603',
                '2e': 'https://canvas.uw.edu/files/90572605',
                '2f': 'https://canvas.uw.edu/files/90572607',
                '2g': 'https://canvas.uw.edu/files/90572609',
                '2h': 'https://canvas.uw.edu/files/90572615',
                '2p': 'https://canvas.uw.edu/files/90572616',
                '3a': 'https://canvas.uw.edu/files/90572617',
                '3b': 'https://canvas.uw.edu/files/90572618',
                '3c': 'https://canvas.uw.edu/files/90572620',
                '3d': 'https://canvas.uw.edu/files/90572623',
                '3e': 'https://canvas.uw.edu/files/90572627',
                '3p': 'https://canvas.uw.edu/files/90572631',
                '4poster': 'https://canvas.uw.edu/files/90572673'
            }
        },
        {
            name: 'BookWurm',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/bookwurm/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90573012',
                '1c': 'https://canvas.uw.edu/files/90491675',
                '2b': 'https://canvas.uw.edu/files/90573013',
                '2c': 'https://canvas.uw.edu/files/90573014',
                '2d': 'https://canvas.uw.edu/files/90573015',
                '2e': 'https://canvas.uw.edu/files/90573016',
                '2f': 'https://canvas.uw.edu/files/90573020',
                '2g': 'https://canvas.uw.edu/files/90573021',
                '2h': 'https://canvas.uw.edu/files/90573023',
                '2p': 'https://canvas.uw.edu/files/90573026',
                '3a': 'https://canvas.uw.edu/files/90573027',
                '3c': 'https://canvas.uw.edu/files/90573028',
                '3d': 'https://canvas.uw.edu/files/90573030',
                '3e': 'https://canvas.uw.edu/files/90573032',
                '3p': 'https://canvas.uw.edu/files/90573035',
                '4poster': 'https://canvas.uw.edu/files/90573097'
            }
        },
        {
            name: 'Dash',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/dash/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90573268',
                '1c': 'https://canvas.uw.edu/files/90491685',
                '2b': 'https://canvas.uw.edu/files/90573270',
                '2c': 'https://canvas.uw.edu/files/90573271',
                '2d': 'https://canvas.uw.edu/files/90573272',
                '2e': 'https://canvas.uw.edu/files/90573273',
                '2f': 'https://canvas.uw.edu/files/90573274',
                '2g': 'https://canvas.uw.edu/files/90573276',
                '2h': 'https://canvas.uw.edu/files/90573277',
                '2p': 'https://canvas.uw.edu/files/90573280',
                '3a': 'https://canvas.uw.edu/files/90573284',
                '3c': 'https://canvas.uw.edu/files/90573285',
                '3d': 'https://canvas.uw.edu/files/90573287',
                '3e': 'https://canvas.uw.edu/files/90573289',
                '3p': 'https://canvas.uw.edu/files/90573291',
                '4poster': 'https://canvas.uw.edu/files/90573299'
            }
        },
        {
            name: 'Hermes',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/hermes/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90573383',
                '1c': 'https://canvas.uw.edu/files/90491690',
                '2b': 'https://canvas.uw.edu/files/90573384',
                '2c': 'https://canvas.uw.edu/files/90573387',
                '2d': 'https://canvas.uw.edu/files/90573388',
                '2e': 'https://canvas.uw.edu/files/90573390',
                '2f': 'https://canvas.uw.edu/files/90573394',
                '2g': 'https://canvas.uw.edu/files/90573406',
                '2h': 'https://canvas.uw.edu/files/90573416',
                '2p': 'https://canvas.uw.edu/files/90573422',
                '3a': 'https://canvas.uw.edu/files/90573424',
                '3b': 'https://canvas.uw.edu/files/90573425',
                '3c': 'https://canvas.uw.edu/files/90573426',
                '3d': 'https://canvas.uw.edu/files/90573428',
                '3e': 'https://canvas.uw.edu/files/90573433',
                '3p': 'https://canvas.uw.edu/files/90573435',
                '4poster': 'https://canvas.uw.edu/files/90573441'
            }
        },
        {
            name: 'Jasper',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90573513',
                '1c': 'https://canvas.uw.edu/files/90491701',
                '2b': 'https://canvas.uw.edu/files/90573515',
                '2c': 'https://canvas.uw.edu/files/90573516',
                '2d': 'https://canvas.uw.edu/files/90573518',
                '2e': 'https://canvas.uw.edu/files/90573520',
                '2f': 'https://canvas.uw.edu/files/90573529',
                '2g': 'https://canvas.uw.edu/files/90573531',
                '2h': 'https://canvas.uw.edu/files/90573532',
                '2p': 'https://canvas.uw.edu/files/90573534',
                '3a': 'https://canvas.uw.edu/files/90573535',
                '3c': 'https://canvas.uw.edu/files/90573536',
                '3d': 'https://canvas.uw.edu/files/90573537',
                '3e': 'https://canvas.uw.edu/files/90573540',
                '3p': 'https://canvas.uw.edu/files/90573544',
                '4poster': 'https://canvas.uw.edu/files/90573549'
            }
        },
        {
            name: 'Laundr',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/laundr/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90578149',
                '1c': 'https://canvas.uw.edu/files/90491707',
                '2b': 'https://canvas.uw.edu/files/90578151',
                '2c': 'https://canvas.uw.edu/files/90578154',
                '2d': 'https://canvas.uw.edu/files/90578155',
                '2e': 'https://canvas.uw.edu/files/90578157',
                '2f': 'https://canvas.uw.edu/files/90578161',
                '2g': 'https://canvas.uw.edu/files/90578164',
                '2h': 'https://canvas.uw.edu/files/90578171',
                '2p': 'https://canvas.uw.edu/files/90578177',
                '3a': 'https://canvas.uw.edu/files/90577984',
                '3c': 'https://canvas.uw.edu/files/90578197',
                '3d': 'https://canvas.uw.edu/files/90578199',
                '3e': 'https://canvas.uw.edu/files/90578140',
                '3p': 'https://canvas.uw.edu/files/90578141',
                '4poster': 'https://canvas.uw.edu/files/90578147'
            }
        },
        {
            name: 'notE',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/note/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90578221',
                '1c': 'https://canvas.uw.edu/files/90491732',
                '2b': 'https://canvas.uw.edu/files/90578222',
                '2c': 'https://canvas.uw.edu/files/90578223',
                '2d': 'https://canvas.uw.edu/files/90578224',
                '2e': 'https://canvas.uw.edu/files/90578225',
                '2f': 'https://canvas.uw.edu/files/90578226',
                '2g': 'https://canvas.uw.edu/files/90578228',
                '2h': 'https://canvas.uw.edu/files/90578230',
                '2p': 'https://canvas.uw.edu/files/90578237',
                '3a': 'https://canvas.uw.edu/files/90578243',
                '3c': 'https://canvas.uw.edu/files/90578246',
                '3d': 'https://canvas.uw.edu/files/90578250',
                '3e': 'https://canvas.uw.edu/files/90578252',
                '3p': 'https://canvas.uw.edu/files/90578255',
            }
        },
        {
            name: 'Pawsitive',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/pawsitive/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90578444',
                '1c': 'https://canvas.uw.edu/files/90491738',
                '2b': 'https://canvas.uw.edu/files/90578445',
                '2c': 'https://canvas.uw.edu/files/90578446',
                '2d': 'https://canvas.uw.edu/files/90578447',
                '2e': 'https://canvas.uw.edu/files/90578448',
                '2f': 'https://canvas.uw.edu/files/90578452',
                '2g': 'https://canvas.uw.edu/files/90578453',
                '2h': 'https://canvas.uw.edu/files/90578650',
                '2p': 'https://canvas.uw.edu/files/90578722',
                '3a': 'https://canvas.uw.edu/files/90578512',
                '3c': 'https://canvas.uw.edu/files/90578682',
                '3d': 'https://canvas.uw.edu/files/90578561',
                '3e': 'https://canvas.uw.edu/files/90578570',
                '3p': 'https://canvas.uw.edu/files/90578781',
                '4poster': 'https://canvas.uw.edu/files/90578620'
            }
        },
        {
            name: 'Pilltender',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/pilltender/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90578817',
                '1c': 'https://canvas.uw.edu/files/90491745',
                '2b': 'https://canvas.uw.edu/files/90578818',
                '2c': 'https://canvas.uw.edu/files/90578819',
                '2d': 'https://canvas.uw.edu/files/90578823',
                '2e': 'https://canvas.uw.edu/files/90578826',
                '2f': 'https://canvas.uw.edu/files/90578864',
                '2g': 'https://canvas.uw.edu/files/90578844',
                '2h': 'https://canvas.uw.edu/files/90578846',
                '2p': 'https://canvas.uw.edu/files/90578848',
                '3a': 'https://canvas.uw.edu/files/90578849',
                '3b': 'https://canvas.uw.edu/files/90578850',
                '3c': 'https://canvas.uw.edu/files/90579291',
                '3d': 'https://canvas.uw.edu/files/90578872',
                '3e': 'https://canvas.uw.edu/files/90578873',
                '3p': 'https://canvas.uw.edu/files/90578874',
                '4poster': 'https://canvas.uw.edu/files/90578909'
            }
        },
        {
            name: 'SEEK',
            link: 'https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/seek/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90579301',
                '1c': 'https://canvas.uw.edu/files/90491755',
                '2b': 'https://canvas.uw.edu/files/90579302',
                '2c': 'https://canvas.uw.edu/files/90579303',
                '2d': 'https://canvas.uw.edu/files/90579305',
                '2e': 'https://canvas.uw.edu/files/90579306',
                '2f': 'https://canvas.uw.edu/files/90579308',
                '2g': 'https://canvas.uw.edu/files/90579309',
                '2h': 'https://canvas.uw.edu/files/90579310',
                '2p': 'https://canvas.uw.edu/files/90579311',
                '3a': 'https://canvas.uw.edu/files/90579314',
                '3c': 'https://canvas.uw.edu/files/90579315',
                '3d': 'https://canvas.uw.edu/files/90579320',
                '3e': 'https://canvas.uw.edu/files/90579321',
                '3p': 'https://canvas.uw.edu/files/90579323',
                '4poster': 'https://canvas.uw.edu/files/90579326'
            }
        },
        {
            name: 'SimPark',
            link: 'https://courses.cs.washington.edu/courses/cse440/17au/projects/simpark/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90579344',
                '1c': 'https://canvas.uw.edu/files/90491761',
                '2b': 'https://canvas.uw.edu/files/90579345',
                '2c': 'https://canvas.uw.edu/files/90579347',
                '2d': 'https://canvas.uw.edu/files/90579348',
                '2e': 'https://canvas.uw.edu/files/90579349',
                '2f': 'https://canvas.uw.edu/files/90579354',
                '2g': 'https://canvas.uw.edu/files/90579355',
                '2h': 'https://canvas.uw.edu/files/90579358',
                '2p': 'https://canvas.uw.edu/files/90579360',
                '3a': 'https://canvas.uw.edu/files/90579361',
                '3b': 'https://canvas.uw.edu/files/90579363',
                '3c': 'https://canvas.uw.edu/files/90579365',
                '3d': 'https://canvas.uw.edu/files/90579371',
                '3e': 'https://canvas.uw.edu/files/90579372',
                '3p': 'https://canvas.uw.edu/files/90579377',
                '4poster': 'https://canvas.uw.edu/files/90579394'
            }
        },
        {
            name: 'Wishing Well',
            link: 'https://courses.cs.washington.edu/courses/cse440/17wi/projects/wishingwell/',
            samples: {
                '1b': 'https://canvas.uw.edu/files/90579417',
                '1c': 'https://canvas.uw.edu/files/90491772',
                '2b': 'https://canvas.uw.edu/files/90579418',
                '2c': 'https://canvas.uw.edu/files/90579421',
                '2d': 'https://canvas.uw.edu/files/90579422',
                '2e': 'https://canvas.uw.edu/files/90579423',
                '2f': 'https://canvas.uw.edu/files/90579425',
                '2g': 'https://canvas.uw.edu/files/90579427',
                '2h': 'https://canvas.uw.edu/files/90579428',
                '2p': 'https://canvas.uw.edu/files/90579430',
                '3a': 'https://canvas.uw.edu/files/90579432',
                '3c': 'https://canvas.uw.edu/files/90579433',
                '3d': 'https://canvas.uw.edu/files/90579436',
                '3e': 'https://canvas.uw.edu/files/90579437',
                '3p': 'https://canvas.uw.edu/files/90579441',
                '4poster': 'https://canvas.uw.edu/files/90579444'
            }
        }
    ]

    // // Link regarding accessible presentations
    // // linkAccessiblePresentations: link = 'https://interactions.acm.org/archive/view/july-august-2017/making-your-presentation-accessible'
}
