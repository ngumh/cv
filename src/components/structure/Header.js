import React, {Suspense,lazy} from "react"
import { RingLoader } from "react-spinners";
import { css } from "@emotion/core";
const Hero = lazy(() => import("../elements/Hero"))

function Header() {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;
    `;
    return(
        <header id="header">
            <Suspense fallback={
            <div><RingLoader 
                css={override}
                color={"#e4d00a"}
            />
            <p className="has-text-centered is-italic is-family-primary">Please Wait...!</p>
            
            </div>}>
                <Hero />
            </Suspense>
        </header>
    )
}

export default Header