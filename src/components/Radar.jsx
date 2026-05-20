function Radar() {

  return (

    <div
      className="fixed top-28 right-10 z-40"
    >

      <div className="relative w-[220px] h-[220px] rounded-full border border-cyan-400 overflow-hidden shadow-[0_0_40px_#00ffff66]">

        {/* circles */}

        <div className="absolute inset-5 border border-cyan-400 rounded-full opacity-40"></div>

        <div className="absolute inset-10 border border-cyan-400 rounded-full opacity-40"></div>

        <div className="absolute inset-16 border border-cyan-400 rounded-full opacity-40"></div>

        {/* rotating scanner */}

        <div
          className="absolute w-1/2 h-[2px] bg-cyan-400 top-1/2 left-1/2 origin-left animate-spin"
          style={{
            transformOrigin: "left center",
            boxShadow: "0 0 20px cyan"
          }}
        />

        {/* center */}

        <div className="absolute w-4 h-4 bg-cyan-400 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_cyan]" />

      </div>

    </div>

  );

}

export default Radar;