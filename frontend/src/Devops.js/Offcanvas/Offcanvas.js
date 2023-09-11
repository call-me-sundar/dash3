import React from 'react'

export default function () {
    return (
        <div>
            <div
                className="offcanvas offcanvas-end"
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                        Backdrop with scrolling
                    </h5>
                    <button
                        type="button"
                        className="btn-close shadow-none"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    />
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
        </div>
    )
}
