import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrated1726131307317 implements MigrationInterface {
    name = 'Migrated1726131307317'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "meta_title"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "meta_description"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "meta_keywords"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "logo"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "store_name"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "store_owner"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "geocode"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "opening_times"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "comment"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "time_zone"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "length_class"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "weight_class"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "currency"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "currency_rate_engine"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "auto_update_currency"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "list_description_limit"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "default_items_per_page"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "default_items_per_page_admin"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "product_report_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "category_product_count"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "allow_reviews"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "allow_reviews_products_purchased"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "allow_guest_reviews"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "voucher_min"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "voucher_max"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "cookie_policy"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "gdpr_policy"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "gdpr_limit"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "display_prices_with_tax"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "use_customer_tax_address"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "customers_online_timeout"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "max_login_attempts"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "account_terms"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "customers_online"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "customers_activity"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "log_customers_searches"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "login_display_prices"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "telephone_display"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "telephone_required"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "invoice_prefix"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "display_weight_on_cart_page"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "guest_checkout"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "billing_address_required"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "checkout_terms"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "processing_order_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "complete_order_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "fraud_order_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "subscription_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "subscription_active_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "subscription_expired_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "subscription_canceled_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "subscription_failed_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "subscription_denied_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "display_stock"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "show_out_of_stock_warning"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "stock_checkout"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "return_status"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "return_terms"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "category_image_size_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "category_image_size_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "product_image_thumb_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "product_image_thumb_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "product_image_popup_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "product_image_popup_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "product_image_list_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "product_image_list_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "additional_product_image_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "additional_product_image_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "relative_product_image_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "relative_product_image_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "compare_image_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "compare_image_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "wishlist_image_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "wishlist_image_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "cart_image_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "cart_image_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "store_image_width"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "store_image_height"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "mail_engine"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "mail_parameters"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "hostname"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "username"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "port"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "timeout"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "alert_mail"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "additional_alert_mail"`);
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "use_store_tax_address"`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "settings_data" jsonb DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "settings" DROP COLUMN "settings_data"`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "use_store_tax_address" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "additional_alert_mail" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "alert_mail" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "timeout" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "port" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "password" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "username" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "hostname" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "mail_parameters" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "mail_engine" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "store_image_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "store_image_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "cart_image_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "cart_image_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "wishlist_image_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "wishlist_image_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "compare_image_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "compare_image_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "relative_product_image_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "relative_product_image_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "additional_product_image_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "additional_product_image_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "product_image_list_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "product_image_list_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "product_image_popup_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "product_image_popup_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "product_image_thumb_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "product_image_thumb_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "category_image_size_height" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "category_image_size_width" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "return_terms" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "return_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "stock_checkout" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "show_out_of_stock_warning" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "display_stock" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "subscription_denied_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "subscription_failed_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "subscription_canceled_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "subscription_expired_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "subscription_active_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "subscription_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "fraud_order_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "complete_order_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "processing_order_status" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "checkout_terms" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "billing_address_required" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "guest_checkout" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "display_weight_on_cart_page" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "invoice_prefix" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "telephone_required" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "telephone_display" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "login_display_prices" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "log_customers_searches" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "customers_activity" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "customers_online" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "account_terms" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "max_login_attempts" integer NOT NULL DEFAULT '5'`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "customers_online_timeout" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "use_customer_tax_address" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "display_prices_with_tax" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "gdpr_limit" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "gdpr_policy" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "cookie_policy" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "voucher_max" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "voucher_min" integer`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "allow_guest_reviews" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "allow_reviews_products_purchased" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "allow_reviews" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "category_product_count" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "product_report_status" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "default_items_per_page_admin" integer NOT NULL DEFAULT '10'`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "default_items_per_page" integer NOT NULL DEFAULT '10'`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "list_description_limit" text`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "auto_update_currency" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "currency_rate_engine" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "currency" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "weight_class" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "length_class" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "time_zone" json`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "comment" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "opening_times" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "image" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "address" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "phone" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "email" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "geocode" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "store_owner" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "store_name" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "logo" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "meta_keywords" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "meta_description" character varying`);
        await queryRunner.query(`ALTER TABLE "settings" ADD "meta_title" character varying`);
    }

}