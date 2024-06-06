import {AlertTypes} from "../helper/alertTypes.ts";

export function Alert({alertType, alertMessage, closeAlert}: {
    alertType: AlertTypes,
    alertMessage: string,
    closeAlert: () => void
}) {

    function destroyAlert() {
        closeAlert()
    }

    switch (alertType) {
        case AlertTypes.SUCCESS:
            return (
                <>
                    <div
                        className={"flex flex-row justify-between align-middle bg-successBg py-1 px-3 w-2/5 rounded fixed z-50 left-1/2 top-2 -translate-x-1/2 rounded-2xl animate-slideDown"}>
                        <p className={"text-successText font-medium w-fit"}>{alertMessage}</p>
                        <button className={"text-successText font-medium hover:text-primary duration-300"}
                                onClick={() => destroyAlert()}>X
                        </button>
                    </div>
                </>
            )
        case AlertTypes.ERROR:
            return (
                <>
                    <div
                        className={"flex flex-row justify-between align-middle bg-errorBg py-1 px-3 w-2/5 rounded fixed z-50 left-1/2 top-2 -translate-x-1/2 rounded-2xl animate-slideDown"}>
                        <p className={"text-errorText font-medium w-fit"}>{alertMessage}</p>
                        <button className={"text-errorText font-medium hover:text-primary duration-300"}
                                onClick={() => destroyAlert()}>X
                        </button>
                    </div>
                </>
            )
        case AlertTypes.WARNING:
            return (
                <>
                    <div
                        className={"flex flex-row justify-between align-middle bg-warningBg py-1 px-3 w-2/5 rounded fixed z-50 left-1/2 top-2 -translate-x-1/2 rounded-2xl animate-slideDown"}>
                        <p className={"text-warningText font-medium w-fit"}>{alertMessage}</p>
                        <button className={"text-warningText font-medium hover:text-primary duration-300"}
                                onClick={() => destroyAlert()}>X
                        </button>
                    </div>
                </>
            )
        case AlertTypes.INFO:
            return (
                <>
                    <div
                        className={"flex flex-row justify-between align-middle bg-infoBg py-1 px-3 w-2/5 rounded fixed z-50 left-1/2 top-2 -translate-x-1/2 rounded-2xl animate-slideDown"}>
                        <p className={"text-infoText font-medium w-fit"}>{alertMessage}</p>
                        <button className={"text-infoText font-medium hover:text-primary duration-300"}
                                onClick={() => destroyAlert()}>X
                        </button>
                    </div>
                </>
            )
    }
}