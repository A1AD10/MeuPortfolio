export default function SvgLink({ color }) {
    return (
        <svg  viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7057 13.7071L17.9986 7.41421V11H19.9986V4H12.9986V6H16.5844L10.2915 12.2929L11.7057 13.7071Z" fill={color} />
            <path d="M19.0015 18V14H17.0015V18H6.00146V7H10.0015V5H6.00146C4.8969 5 4.00146 5.89543 4.00146 7V18C4.00146 19.1046 4.8969 20 6.00146 20H17.0015C18.106 20 19.0015 19.1046 19.0015 18Z" fill={color} />
        </svg>
    )
}