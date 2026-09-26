import React, { useRef } from 'react'

const App = () => {
  return (
    <div>
      <Essay/>
      <Essay />
      <Essay />
      <Essay />

    </div>

  )
}

function Essay(){
  const divRef = useRef(null)
  return(

    <div>
      {/* 
        <div id = "essay">


        </div>
       */}
      <div ref={divRef}>
        PinnedLoading
        IND-Wallet Public
        IND Wallet is open source wallet apps from which you can done onRampTxns , p2p transfers , merchant app , with fake hdfc banking api &wehbhook (unstable & no security)

        TypeScript

        93 contributions in the last year
        Skip to contributions year list
        Contribution Graph
        Day of Week	SeptemberSep	OctoberOct	NovemberNov	DecemberDec	JanuaryJan	FebruaryFeb	MarchMar	AprilApr	MayMay	JuneJun	JulyJul	AugustAug	SeptemberSep
        SundaySun
        MondayMon
        TuesdayTue
        WednesdayWed
        ThursdayThu
        FridayFri
        SaturdaySat
        Learn how we count contributions
        Less
        No contributions.
        Low contributions.
        Medium-low contributions.
        Medium-high contributions.
        High contributions.
        More
        Contribution activity
        September 2026
        Opened their first issue on GitHub in Ni-then/IND-Wallet Public
        Sep 14
        Congratulations on your first issue!
        First issue
        Resolve Next.js Development Server Failure Caused by Turbopack and SWC Native Binding Issues on Windows
        Loading
        Seeing something unexpected? Take a look at the GitHub profile guide.

        2026
        Footer
        © 2026 GitHub, Inc.
        Footer navigation
        Terms
        Privacy
        Security
        Status
        Community
        Docs
        Contact
        Manage cookies


        PinnedLoading
        IND-Wallet Public
        IND Wallet is open source wallet apps from which you can done onRampTxns , p2p transfers , merchant app , with fake hdfc banking api &wehbhook (unstable & no security)

        TypeScript

        93 contributions in the last year
        Skip to contributions year list
        Contribution Graph
        Day of Week	SeptemberSep	OctoberOct	NovemberNov	DecemberDec	JanuaryJan	FebruaryFeb	MarchMar	AprilApr	MayMay	JuneJun	JulyJul	AugustAug	SeptemberSep
        SundaySun
        MondayMon
        TuesdayTue
        WednesdayWed
        ThursdayThu
        FridayFri
        SaturdaySat
        Learn how we count contributions
        Less
        No contributions.
        Low contributions.
        Medium-low contributions.
        Medium-high contributions.
        High contributions.
        More
        Contribution activity
        September 2026
        Opened their first issue on GitHub in Ni-then/IND-Wallet Public
        Sep 14
        Congratulations on your first issue!
        First issue
        Resolve Next.js Development Server Failure Caused by Turbopack and SWC Native Binding Issues on Windows
        Loading
        Seeing something unexpected? Take a look at the GitHub profile guide.

        2026
        Footer
        © 2026 GitHub, Inc.
        Footer navigation
        Terms
        Privacy
        Security
        Status
        Community
        Docs
        Contact
        Manage cookies



        PinnedLoading
        IND-Wallet Public
        IND Wallet is open source wallet apps from which you can done onRampTxns , p2p transfers , merchant app , with fake hdfc banking api &wehbhook (unstable & no security)

        TypeScript

        93 contributions in the last year
        Skip to contributions year list
        Contribution Graph
        Day of Week	SeptemberSep	OctoberOct	NovemberNov	DecemberDec	JanuaryJan	FebruaryFeb	MarchMar	AprilApr	MayMay	JuneJun	JulyJul	AugustAug	SeptemberSep
        SundaySun
        MondayMon
        TuesdayTue
        WednesdayWed
        ThursdayThu
        FridayFri
        SaturdaySat
        Learn how we count contributions
        Less
        No contributions.
        Low contributions.
        Medium-low contributions.
        Medium-high contributions.
        High contributions.
        More
        Contribution activity
        September 2026
        Opened their first issue on GitHub in Ni-then/IND-Wallet Public
        Sep 14
        Congratulations on your first issue!
        First issue
        Resolve Next.js Development Server Failure Caused by Turbopack and SWC Native Binding Issues on Windows
        Loading
        Seeing something unexpected? Take a look at the GitHub profile guide.

        2026
        Footer
        © 2026 GitHub, Inc.
        Footer navigation
        Terms
        Privacy
        Security
        Status
        Community
        Docs
        Contact
        Manage cookies




        PinnedLoading
        IND-Wallet Public
        IND Wallet is open source wallet apps from which you can done onRampTxns , p2p transfers , merchant app , with fake hdfc banking api &wehbhook (unstable & no security)

        TypeScript

        93 contributions in the last year
        Skip to contributions year list
        Contribution Graph
        Day of Week	SeptemberSep	OctoberOct	NovemberNov	DecemberDec	JanuaryJan	FebruaryFeb	MarchMar	AprilApr	MayMay	JuneJun	JulyJul	AugustAug	SeptemberSep
        SundaySun
        MondayMon
        TuesdayTue
        WednesdayWed
        ThursdayThu
        FridayFri
        SaturdaySat
        Learn how we count contributions
        Less
        No contributions.
        Low contributions.
        Medium-low contributions.
        Medium-high contributions.
        High contributions.
        More
        Contribution activity
        September 2026
        Opened their first issue on GitHub in Ni-then/IND-Wallet Public
        Sep 14
        Congratulations on your first issue!
        First issue
        Resolve Next.js Development Server Failure Caused by Turbopack and SWC Native Binding Issues on Windows
        Loading
        Seeing something unexpected? Take a look at the GitHub profile guide.

        2026
        Footer
        © 2026 GitHub, Inc.
        Footer navigation
        Terms
        Privacy
        Security
        Status
        Community
        Docs
        Contact
        Manage cookies



      </div>

      <button onClick={()=>{
        // const div = document.getElementById("essay");
        // div.scrollTop = 0;

        divRef.current.scrollTop = 0;
        // 9 : 36 (when i reach to the 99 commit )
      }}>Take me to top</button>
    </div>
  )
}
export default App