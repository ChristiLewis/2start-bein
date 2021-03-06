//THIS FILE GOES INTO EACH SRC/COMPONENTS/COMPONENTNAME-PASCALCASE/__TESTS__/INDEX.TEST.JS-THIS ONE IS FOR THE ABOUT SECTION


//IMPORT THE REACT TESTING LIBRARY


//IMPORT THE JEST-DOM PACKAGE


//IMPORT THE COMPONENT


//CONFIGURE THE TEST ENV BY CALLING CLEANUP() VIA AFTEREACH GLOBAL FUNCTION FROM JEST


//DECLARE THE COMPONENT BEING TESTED VIA DESCRIBE()

    //RENDERS ABOUT TEST


//CREATE A TEST

describe('About component', () => {
    // First Test
    it('renders', () => {
        render(<About />);
    });

    //CREATE A TEST CASE TO COMPARE SNAPSHOTS OF THE DOM NODE STRUCTURE- HERE INSIDE THE DESCRIBE CALLBACK FUNCTION BODY- BENEATH THE RENDER TEST
    it('matches snapshot DOM node stucture', () => {
        //RETURN THE SNAPSHOT
        const { asFragment } = render(<About />);
        //COMPARE - CONTRAST W/ GOAL TO MATCH
        expect(asFragment()).toMatchSnapshot();
    })
})