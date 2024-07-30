import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'settings' })
export class Settings {
	@PrimaryGeneratedColumn('uuid')
	id!: number;

	@Column({ type: 'varchar', nullable: true })
	meta_title!: string;

	@Column({ type: 'varchar', nullable: true })
	meta_description!: string;

	@Column({ type: 'varchar', nullable: true })
	meta_keywords!: string;

	@Column({ type: 'varchar', nullable: true })
	logo!: string;

	@Column({ type: 'varchar', nullable: true })
	store_name!: string;

	@Column({ type: 'varchar', nullable: true })
	store_owner!: string;

	@Column({ type: 'varchar', nullable: true })
	geocode!: string;

	@Column({ type: 'varchar', nullable: true })
	email!: string;

	@Column({ type: 'varchar', nullable: true })
	phone!: string;

	@Column({ type: 'varchar', nullable: true })
	address!: string;

	@Column({ type: 'varchar', nullable: true })
	image!: string;

	@Column({ type: 'varchar', nullable: true })
	opening_times!: string;

	@Column({ type: 'varchar', nullable: true })
	comment!: string;

	@Column({ type: 'json', nullable: true })
	time_zone!: object;

	@Column({ type: 'json', nullable: true })
	length_class!: object;

	@Column({ type: 'json', nullable: true })
	weight_class!: object;

	@Column({ type: 'json', nullable: true })
	currency!: object;

	@Column({ type: 'json', nullable: true })
	currency_rate_engine!: object;

	@Column({ type: 'boolean', nullable: true })
	auto_update_currency!: boolean;

	@Column({ type: 'text', nullable: true })
	list_description_limit!: string;

	@Column({ type: 'int', nullable: false, default: 10 })
	default_items_per_page!: number;

	@Column({ type: 'int', nullable: false, default: 10 })
	default_items_per_page_admin!: number;

	@Column({ type: 'boolean', nullable: true })
	product_report_status!: boolean;

	@Column({ type: 'boolean', nullable: true })
	category_product_count!: boolean;

	@Column({ type: 'boolean' })
	allow_reviews!: boolean;

	@Column({ type: 'boolean' })
	allow_reviews_products_purchased!: boolean;

	@Column({ type: 'boolean' })
	allow_guest_reviews!: boolean;

	@Column({ type: 'integer' })
	voucher_min!: number;

	@Column({ type: 'integer' })
	voucher_max!: number;

	@Column({ type: 'json' })
	cookie_policy!: object;

	@Column({ type: 'json' })
	gdpr_policy!: object;

	@Column({ type: 'integer' })
	gdpr_limit!: number;

	@Column({ type: 'boolean' })
	display_prices_with_tax!: boolean;

	@Column({ type: 'json' })
	use_store_tax_address!: object;

	@Column({ type: 'json' })
	use_customer_tax_address!: object;

	@Column({ type: 'integer' })
	customers_online_timeout!: number;

	@Column({ type: 'integer', default: 5 })
	max_login_attempts!: number;

	@Column({ type: 'json' })
	account_terms!: object;

	@Column({ type: 'boolean' })
	customers_online!: boolean;

	@Column({ type: 'boolean' })
	customers_activity!: boolean;

	@Column({ type: 'boolean' })
	log_customers_searches!: boolean;

	@Column({ type: 'boolean' })
	login_display_prices!: boolean;

	@Column({ type: 'boolean' })
	telephone_display!: boolean;

	@Column({ type: 'boolean' })
	telephone_required!: boolean;

	@Column({ type: 'varchar', nullable: true })
	invoice_prefix!: string;

	@Column({ type: 'boolean' })
	display_weight_on_cart_page!: boolean;

	@Column({ type: 'boolean' })
	guest_checkout!: boolean;

	@Column({ type: 'boolean' })
	billing_address_required!: boolean;

	@Column({ type: 'boolean' })
	checkout_terms!: boolean;

	@Column({ type: 'json' })
	processing_order_status!: object;

	@Column({ type: 'json' })
	complete_order_status!: object;

	@Column({ type: 'json' })
	fraud_order_status!: object;

	@Column({ type: 'json' })
	subscription_status!: object;

	@Column({ type: 'json' })
	subscription_active_status!: object;

	@Column({ type: 'json' })
	subscription_expired_status!: object;

	@Column({ type: 'json' })
	subscription_canceled_status!: object;

	@Column({ type: 'json' })
	subscription_failed_status!: object;

	@Column({ type: 'json' })
	subscription_denied_status!: object;

	@Column({ type: 'boolean' })
	display_stock!: boolean;

	@Column('boolean')
	show_out_of_stock_warning!: boolean;

	@Column({ type: 'boolean' })
	stock_checkout!: boolean;

	@Column({ type: 'json' })
	return_status!: object;

	@Column({ type: 'json' })
	return_terms!: object;

	@Column({ type: 'integer' })
	category_image_size_width!: number;

	@Column({ type: 'integer' })
	category_image_size_height!: number;

	@Column({ type: 'integer' })
	product_image_thumb_width!: number;

	@Column({ type: 'integer' })
	product_image_thumb_height!: number;

	@Column({ type: 'integer' })
	product_image_popup_width!: number;

	@Column({ type: 'integer' })
	product_image_popup_height!: number;

	@Column({ type: 'integer' })
	product_image_list_width!: number;

	@Column({ type: 'integer' })
	product_image_list_height!: number;

	@Column({ type: 'integer' })
	additional_product_image_width!: number;

	@Column({ type: 'integer' })
	additional_product_image_height!: number;

	@Column({ type: 'integer' })
	relative_product_image_width!: number;

	@Column({ type: 'integer' })
	relative_product_image_height!: number;

	@Column({ type: 'integer' })
	compare_image_width!: number;

	@Column({ type: 'integer' })
	compare_image_height!: number;

	@Column({ type: 'integer' })
	wishlist_image_width!: number;

	@Column({ type: 'integer' })
	wishlist_image_height!: number;

	@Column({ type: 'integer' })
	cart_image_width!: number;

	@Column({ type: 'integer' })
	cart_image_height!: number;

	@Column({ type: 'integer' })
	store_image_width!: number;

	@Column({ type: 'integer' })
	store_image_height!: number;

	@Column({ type: 'json' })
	mail_engine!: object;

	@Column({ type: 'varchar' })
	mail_parameters!: string;

	@Column({ type: 'varchar' })
	hostname!: string;

	@Column({ type: 'varchar' })
	username!: string;

	@Column({ type: 'varchar' })
	password!: string;

	@Column({ type: 'integer' })
	port!: number;

	@Column({ type: 'integer' })
	timeout!: number;

	@Column({ type: 'json' })
	alert_mail!: object;

	@Column({ type: 'varchar' })
	additional_alert_mail!: string;
}
