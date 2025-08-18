interface ContactItemProps {
  label: string;
  value: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ label, value }) => (
  <>
    <dt className="tracking-tighter font-bold">{label}</dt>
    <dd className="font-medium">{value}</dd>
  </>
);

export default ContactItem;
