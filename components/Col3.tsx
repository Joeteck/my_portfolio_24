const Col3 = () => {
    return (
        <div className="flex gap-3 flex-row relative w-full text-base max-sm:pb-5" style={{ fontSize: "12px", lineHeight: "23px" }}>
            {/* Column 2: Job Duration */}
            <div className="flex flex-col w-1/6 text-grey-100 text-right pr-3">
                <div>24</div>
                <div>23</div>
                <div>22—23</div>
                <div>20—22</div>
                <div>22</div>
                <div>21</div>
                <div>21</div>
                <div>20—21</div>
                <div>20</div>
                <div>20</div>
                <div>20</div>
                <div>20</div>
                <div>19</div>
                <div>19</div>
                <div>18—19</div>
            </div>
            
            {/* Column 1: Job Title and Company */}
            <div className="flex flex-col w-1/3 text-white">
                <div className="truncate">Apple</div>
                <div className="truncate">Meta Reality Labs</div>
                <div className="truncate">PlaybookXR</div>
                <div className="truncate">Wondr [Studio Godsey]</div>
                <div className="truncate">Verifee</div>
                <div className="truncate">ZOE</div>
                <div className="truncate">Kiwi.com</div>
                <div className="truncate">Undout</div>
                <div className="truncate">Zero [Studio Godsey]</div>
                <div className="truncate">XTND</div>
                <div className="truncate">Fuzee</div>
                <div className="truncate">Avocode</div>
                <div className="truncate">Avast</div>
                <div className="truncate">DevCompany</div>
                <div className="truncate">Mavvo</div>
            </div>
            
            {/* Column 3: Job Description */}
            <div className="flex flex-col w-2/3 text-white">
                <div className="truncate">[Special Projects Group, Marcom]</div>
                <div className="truncate">AR UX, Unity, Art Direction</div>
                <div className="truncate">VR UX, Unity, AI</div>
                <div className="truncate">Mobile UX, Visual, Design System</div>
                <div className="truncate">Web App UX, Extension UX, Visual</div>
                <div className="truncate">Web App UX, User Testing, Growth</div>
                <div className="truncate">Web App UX, Mobile UX, Growth</div>
                <div className="truncate">Mobile UX, Web, Visual</div>
                <div className="truncate">Mobile UX, Growth</div>
                <div className="truncate">Web, Visual</div>
                <div className="truncate">Mobile UX, Visual</div>
                <div className="truncate">Web App UX, Growth</div>
                <div className="truncate">Mobile UX, Visual, Testing</div>
                <div className="truncate">Web, Brand Identity</div>
                <div className="truncate">Web, Mobile, Lottie Animation</div>
            </div>
        </div>
    );
};

export default Col3;
