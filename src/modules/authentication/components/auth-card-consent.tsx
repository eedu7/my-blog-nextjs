import { PRIVACY_LINK, TERMS_LINK } from "@/data/navigation-links";
import Link from "next/link";

export const AuthCardConsentParagrapht = () => {
    return (
        <div>
            <p className="text-[0.8rem] text-gray-600">
                Click &quot;Register&quot; to agree to MyBlog&apos;s{" "}
                <Link className="text-blue-800 underline underline-offset-2" href={TERMS_LINK.href}>
                    Terms of Service
                </Link>{" "}
                and acknowledge that MyBlog&apos;s{" "}
                <Link
                    className="text-blue-800 underline underline-offset-2"
                    href={PRIVACY_LINK.href}
                >
                    Privacy Policy
                </Link>{" "}
                applies to you.
            </p>
        </div>
    );
};
